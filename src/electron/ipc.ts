import { ipcMain, IpcMainInvokeEvent } from 'electron'
import { getRandomNum } from './utils/misc'

export const registerIpcHandlers = () => {
	ipcMain.handle('get-random-num', async (_event: IpcMainInvokeEvent) => getRandomNum())
}
