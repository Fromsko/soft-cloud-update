<template>
  <div class="app-container">
    <div class="header">
      <div class="search">
        <el-input class="search-input" v-model="searchQuery" placeholder="搜索应用名" />
        <el-button class="search-button" type="primary" :icon="Search" />
      </div>
    </div>

    <div class="list-body">
      <div class="table-handler" style="margin-bottom: 8px">
        <el-button type="primary" @click="openModal('add')">新增</el-button>
        <el-button @click="toggleSelection('delete', multipleSelection)">批量删除</el-button>
        <el-button @click="toggleSelection('clear')">清空选择</el-button>
        <el-button @click="toggleSelection('lock', multipleSelection)">锁定所选</el-button>
        <el-button @click="toggleSelection('unlock', multipleSelection)">解锁所选</el-button>
      </div>
      <el-table
        empty-text="暂时没有数据"
        ref="multipleTableRef"
        :data="filteredApplications"
        @selection-change="handleSelectionChange"
        :header-cell-style="{ 'text-align': 'center' }"
        border
      >
        <el-table-column type="selection" :selectable="selectable" width="55" />
        <el-table-column prop="name" label="应用名" />
        <el-table-column prop="version" label="版本号" />
        <el-table-column prop="updateUrl" label="更新地址" />
        <el-table-column prop="updateLog" label="更新日志" />
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button-group class="ml-2 operation-buttons">
              <el-button type="success" :icon="Edit" @click="openModal('edit', row)" />
              <el-button type="danger" :icon="Delete" @click="deleteApp({ app: row })" />
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :title="modalTitle" v-model="modalVisible">
      <el-form :model="formData" ref="formRef">
        <el-form-item label="应用名" prop="name" required>
          <el-input v-model="formData.name" placeholder="请输入应用名" />
        </el-form-item>
        <el-form-item label="版本号" prop="version" required>
          <el-input v-model="formData.version" placeholder="以Vx.x.x开始" />
        </el-form-item>
        <el-form-item label="应用文件">
          <el-upload class="upload-demo" drag action="#" :on-change="handleFileChange" :before-upload="beforeUpload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">拖拽文件到此处，或点击上传</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="更新地址" prop="updateUrl" required>
          <el-input v-model="formData.updateUrl" placeholder="请输入更新地址" />
        </el-form-item>
        <el-form-item label="更新日志" prop="updateLog" required>
          <el-input v-model="formData.updateLog" placeholder="请输入更新日志" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modalVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { IApplication, useApplication } from '@/utils/hooks/application'
import { Delete, Edit, Search } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { computed, ref } from 'vue'

import type { TableInstance } from 'element-plus'

const multipleTableRef = ref<TableInstance>()
const multipleSelection = ref<IApplication[]>([])

const lockData = ref<IApplication[]>([])
const selectable = (row: IApplication) => !lockData.value.includes(row)

const formRef = ref()
const { applications, addApplication, editApplication, deleteApplication } = useApplication()
const searchQuery = ref('')
const modalVisible = ref(false)
const modalTitle = ref('')
const formData = ref<IApplication>({
  name: '',
  version: '',
  updateUrl: '',
  updateLog: '优化了一些操作',
})

const filteredApplications = computed(() => {
  return applications.value.filter((app) => app.name.includes(searchQuery.value))
})

const openModal = (action: 'add' | 'edit', app: IApplication = { name: '', version: '', updateUrl: '', updateLog: '优化了一些操作' }) => {
  modalVisible.value = true
  modalTitle.value = action === 'add' ? '新增应用' : '修改应用'
  formData.value = { ...app }
}

const handleSelectionChange = (val: IApplication[]) => {
  multipleSelection.value = val
}

const handleSubmit = () => {
  formRef.value.validate((valid: any) => {
    if (valid) {
      if (modalTitle.value === '新增应用') {
        addApplication(formData.value)
        ElMessage.success('新增成功')
      } else {
        editApplication(formData.value)
        ElMessage.success('修改成功')
      }
      modalVisible.value = false
    } else {
      ElMessage.error('请确保必填字段已填写')
    }
  })
}

const delteDialog = async (callBack: () => void, title?: string) => {
  try {
    await ElMessageBox.confirm(title, '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    })
    callBack()
    ElMessage.success('删除成功')
  } catch (error) {}
}

const deleteApp = async (obj: { app?: IApplication; apps?: IApplication[] }) => {
  if (obj.app !== undefined) {
    let app = obj.app

    await delteDialog(() => {
      if (!lockData.value.includes(app)) {
        deleteApplication([app])
      }
    }, '确定要删除该应用吗?')
  }

  if (obj.apps && obj.apps.length !== 0) {
    let newSelectRows = obj.apps.filter((app) => !lockData.value.includes(app))

    if (newSelectRows.length > 0) {
      await delteDialog(() => deleteApplication(newSelectRows), '确认删除选择的应用吗?')
    }
  }
}

const toggleSelection = async (action: 'delete' | 'clear' | 'lock' | 'unlock', selectRows?: IApplication[]) => {
  const hasValue = selectRows && selectRows.length !== 0

  switch (action) {
    case 'clear':
      const returnSelect = multipleTableRef.value!.getSelectionRows()

      returnSelect!.forEach((item: IApplication) => {
        if (!lockData.value.includes(item)) {
          multipleTableRef.value!.toggleRowSelection(item, false, false)
        }
      })
      break
    case 'delete':
      if (hasValue) {
        await deleteApp({
          apps: selectRows,
        })
      }
      break
    case 'lock':
      if (hasValue) {
        lockData.value.push(...selectRows)
      }
      break
    case 'unlock':
      if (hasValue) {
        lockData.value = lockData.value.filter((app) => {
          if (!selectRows.includes(app)) {
            return app
          }
        })
      }
      break
    default:
      break
  }
}

const handleFileChange = (file: File) => {
  // 处理文件上传逻辑
}

const beforeUpload = (file: File) => {
  // 校验文件逻辑
  return true
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: column;
    height: 60px;
    padding: 8px;
    border: 1px solid rgb(227, 231, 240);
    border-radius: 8px;
    margin-bottom: 10px;

    .search {
      display: flex;
      height: 40px;
      min-width: 350px;
      justify-content: center;

      .search-input,
      .search-button {
        height: inherit;
      }

      .search-input {
        width: 300px;
      }
    }
  }

  .table-handler {
    display: flex;
    width: 470px;
    height: 40px;
    padding: 2px;
    align-items: center;
    white-space: nowrap;
  }

  .list-body {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    user-select: none;
    overflow: auto;
    margin-bottom: 15px;

    .operation-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }

    .dialog-footer {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
