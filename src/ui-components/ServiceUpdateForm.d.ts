/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceUpdateFormInputValues = {
    title?: string;
    icon?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type ServiceUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    icon?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceUpdateFormOverridesProps = {
    ServiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    icon?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    service?: any;
    onSubmit?: (fields: ServiceUpdateFormInputValues) => ServiceUpdateFormInputValues;
    onSuccess?: (fields: ServiceUpdateFormInputValues) => void;
    onError?: (fields: ServiceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceUpdateFormInputValues) => ServiceUpdateFormInputValues;
    onValidate?: ServiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceUpdateForm(props: ServiceUpdateFormProps): React.ReactElement;
