import { Paper } from '@mantine/core';
import { TodoLayout } from '../../components/Layouts/TodoLayout/TodoLayout';
import { NextPageWithLayout } from '../_app';

const TodoPage: NextPageWithLayout = () => (
  <Paper>
    <h1>Todo Page</h1>
  </Paper>
);

TodoPage.getLayout = (page) => <TodoLayout>{page}</TodoLayout>;

export default TodoPage;
