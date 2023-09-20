/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TechnologyCreateFormInputValues = {
    icon?: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type TechnologyCreateFormValidationValues = {
    icon?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechnologyCreateFormOverridesProps = {
    TechnologyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    icon?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechnologyCreateFormProps = React.PropsWithChildren<{
    overrides?: TechnologyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TechnologyCreateFormInputValues) => TechnologyCreateFormInputValues;
    onSuccess?: (fields: TechnologyCreateFormInputValues) => void;
    onError?: (fields: TechnologyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechnologyCreateFormInputValues) => TechnologyCreateFormInputValues;
    onValidate?: TechnologyCreateFormValidationValues;
} & React.CSSProperties>;
export default function TechnologyCreateForm(props: TechnologyCreateFormProps): React.ReactElement;
