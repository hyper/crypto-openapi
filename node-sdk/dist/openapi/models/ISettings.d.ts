import { IBilling } from './IBilling';
import { IBranding } from './IBranding';
import { IPayments } from './IPayments';
export declare class ISettings {
    'billing': IBilling;
    'branding': IBranding;
    'payments': IPayments;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
