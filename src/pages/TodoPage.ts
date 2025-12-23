import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
    readonly page: Page;
    readonly newTodoInput: Locator;
    readonly todoItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTodoInput = page.locator('.new-todo');
        this.todoItems = page.locator('.todo-list li');
    }

    async goto() {
        if (!process.env.BASE_URL) {
            throw new Error('BASE_URL is not defined in .env file');
        }

        await this.page.goto(process.env.BASE_URL);
        await expect(this.newTodoInput).toBeVisible();
    }

    /**
     * Create new todo item
     */
    async addTodo(text: string) {
        await this.newTodoInput.fill(text);
        await this.newTodoInput.press('Enter');
        await expect(this.todoItems.last()).toHaveText(text);
    }

    /**
     * Update existing todo item by index
     */
    async editTodo(index: number, newText: string) {
        const item = this.todoItems.nth(index);
        await item.dblclick();

        const editInput = item.locator('.edit');
        await editInput.fill(newText);
        await editInput.press('Enter');

        await expect(item).toHaveText(newText);
    }

    /**
     * Delete todo item by index
     */
    async deleteTodo(index: number) {
        const item = this.todoItems.nth(index);
        await item.hover();
        await item.locator('.destroy').click();
    }

    /**
     * Get total number of todos
     */
    async getTodoCount(): Promise<number> {
        return this.todoItems.count();
    }
}

