import { ref } from 'vue';

export interface IApplication {
  id?: number;
  name: string;
  version?: string;
  updateUrl: string;
  updateLog: string;
}

export function useApplication() {
  const applications = ref<IApplication[]>([
    { name: '1', updateUrl: 'x', updateLog: '' },
    { name: '2', updateUrl: 'x', updateLog: '' },
    { name: '3', updateUrl: 'x', updateLog: '' },
    { name: '4', updateUrl: 'x', updateLog: '' },
    { name: '5', updateUrl: 'x', updateLog: '' },
    { name: '6', updateUrl: 'x', updateLog: '' },
    { name: '7', updateUrl: 'x', updateLog: '' },
    { name: '8', updateUrl: 'x', updateLog: '' },
    { name: '9', updateUrl: 'x', updateLog: '' },
    { name: '10', updateUrl: 'x', updateLog: '' },
    { name: '11', updateUrl: 'x', updateLog: '' },
    { name: '1', updateUrl: 'x', updateLog: '' },
    { name: '2', updateUrl: 'x', updateLog: '' },
    { name: '3', updateUrl: 'x', updateLog: '' },
    { name: '4', updateUrl: 'x', updateLog: '' },
    { name: '5', updateUrl: 'x', updateLog: '' },
    { name: '6', updateUrl: 'x', updateLog: '' },
    { name: '7', updateUrl: 'x', updateLog: '' },
    { name: '8', updateUrl: 'x', updateLog: '' },
    { name: '9', updateUrl: 'x', updateLog: '' },
    { name: '10', updateUrl: 'x', updateLog: '' },
    { name: '11', updateUrl: 'x', updateLog: '' },
  ]);

  const addApplication = (app: IApplication) => {
    if (applications.value.find(a => a.name === app.name)) {
      throw new Error('应用名已存在');
    }
    app.id = applications.value.length + 1; // 简单的ID生成
    applications.value.push(app);
  };

  const editApplication = (updatedApp: IApplication) => {
    const index = applications.value.findIndex(a => a.id === updatedApp.id);
    if (index !== -1) {
      applications.value[index] = updatedApp;
    } else {
      throw new Error('应用未找到');
    }
  };

  const deleteApplication = (appToDeletes: IApplication[]) => {
    applications.value = applications.value.filter(app => {
      if (!appToDeletes.includes(app)) return app
    });
  };

  return {
    applications,
    addApplication,
    editApplication,
    deleteApplication,
  };
}
