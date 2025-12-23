
import { test, expect } from '@playwright/test';
import { TodoPage } from '../src/pages/TodoPage';

test.describe('TodoMVC CRUD', () => {
    test('should create, read, update and delete todo', async ({ page }) => {
        const todoPage = new TodoPage(page);

        await todoPage.goto();

        // CREATE
        await todoPage.addTodo('listen metalcore');
        await expect(todoPage.todoItems).toHaveCount(1);

        // READ
        await expect(todoPage.todoItems.first()).toHaveText('listen metalcore');

        // UPDATE
        await todoPage.todoItems.first().dblclick();
        const editInput = page.locator('.edit');
        await editInput.fill('listen hardcore');
        await editInput.press('Enter');
        await expect(todoPage.todoItems.first()).toHaveText('listen hardcore');

        // DELETE
        await todoPage.todoItems.first().hover();
        await page.locator('.destroy').click();
        await expect(todoPage.todoItems).toHaveCount(0);
    });
});
