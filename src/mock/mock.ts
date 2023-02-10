import { nanoid } from 'nanoid';

export const mockSelect = [
  { id: nanoid(), content: '', value: 'all' },
  { id: nanoid(), content: 'по возрастанию', value: 'ascending' },
  { id: nanoid(), content: 'по убыванию', value: 'descending' },
];
