interface ICGFormLib {
    'popShowing': null | IVueControl;
    'lastFormId': number;
    'lastZIndex': number;
    'lastTopZIndex': number;
    'lastPopZIndex': number;
    changeFocus(formId?: number, vm?: IVue): void;
    getRectByBorder(border: TCGBorder): {
        'width': number;
        'height': number;
        'left': number;
        'top': number;
    };
    showCircular(x: number, y: number): void;
    moveRectangle(border: TCGBorder): void;
    showRectangle(x: number, y: number, border: TCGBorder): void;
    hideRectangle(): void;
    appendToPop(el: HTMLElement): void;
    removeFromPop(el: HTMLElement): void;
    showPop(pop: IVueControl, x: number | 'h' | 'v', y?: number): {
        'left': string;
        'top': string;
        'zIndex': string;
    };
    hidePop(pop?: IVueControl | null): void;
    doFocusAndPopEvent(e: MouseEvent | TouchEvent): void;
    remove(formId: number): boolean;
    create(taskId: number, opt: ICGCreateFormOptions): Promise<number | ICGForm>;
}

/** --- 窗体对象 --- */
interface ICGForm {
    'id': number;
    'vapp': IVueApp;
    'vroot': IVue;
    'win': Electron.BrowserWindow | null;
    'events': Record<string, (...any: any) => void | Promise<void>>;
}

/** --- 窗体创建选项 --- */
interface ICGCreateFormOptions {
    'file'?: string;

    'path'?: string; // --- 相当于 base dir，有 file 以 file 为准，没有则以 path 为准，用于定义当前 form 中文件所在的基准路径 ---
    'code'?: Record<string, any>;
    'layout'?: string;
    'style'?: string;

    'topMost'?: boolean;
}
