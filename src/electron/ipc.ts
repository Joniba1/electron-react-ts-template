import { ipcMain, IpcMainInvokeEvent } from 'electron'

export const registerIpcHandlers = () => {
	ipcMain.handle('calculate-sum', async (_event: IpcMainInvokeEvent, a: number, b: number) => {
		return calculateSum(a, b)
	})
}
