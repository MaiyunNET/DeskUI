export declare let props: {
    label: {
        default: string;
    };
};
export declare let watch: {
    label: {
        handler: (this: IVue) => void;
    };
};
export declare let mounted: (this: IVue) => void;
export declare let beforeDestroy: (this: IVue) => void;