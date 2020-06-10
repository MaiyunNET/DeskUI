export declare let props: {
    disabled: {
        default: boolean;
    };
    focus: {
        default: boolean;
    };
    width: {
        default: undefined;
    };
    height: {
        default: number;
    };
    left: {
        default: number;
    };
    top: {
        default: number;
    };
    zIndex: {
        default: number;
    };
    padding: {
        default: undefined;
    };
    flex: {
        default: string;
    };
    value: {
        default: undefined;
    };
    list: {
        default: never[];
    };
};
export declare let data: {
    valueData: string;
};
export declare let watch: {
    value: {
        handler: (this: IVue) => void;
        immediate: boolean;
    };
};
export declare let methods: {
    input: (this: IVue) => void;
};
