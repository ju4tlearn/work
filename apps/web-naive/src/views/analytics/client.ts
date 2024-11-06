import type { DataTableBaseColumn } from 'naive-ui';

import { reactive, ref } from 'vue';

import { defineStore } from 'pinia';

export const getRandomDate = (start: Date, end: Date): string => {
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return '2024-01-01';
  }

  if (start.getTime() > end.getTime()) {
    [start, end] = [end, start];
  }

  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;
};

export const getRandomAmount = (min: number, max: number) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

export const getRandomString = (prefix: string, length: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = prefix;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const useAnalyticsStore = defineStore('analyticsStore', () => {
  const projectItems = ref<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const selectedProject = ref<string>();
  const checkRange = ref<string>('all');
  const checkDateRange = ref<[number, number]>();

  const updateProjectItems = (data: any) => {
    const _projects = new Set<string>();

    data.forEach((item: any) => {
      _projects.add(item.projectName);
    });

    projectItems.value = [..._projects].map((project) => ({
      label: project,
      value: project,
    }));
  };

  return {
    projectItems,
    updateProjectItems,
    selectedProject,
    checkRange,
    checkDateRange,
  };
});

export const projectColumn = reactive<
  DataTableBaseColumn<{ projectName: string }>
>({
  title: '项目名称',
  key: 'projectName',
  width: 120,
  fixed: 'left',
  filter(value, row) {
    return row.projectName === value;
  },
});
