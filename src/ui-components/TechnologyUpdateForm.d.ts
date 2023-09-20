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
export declare type TechnologyUpdateFormInputValues = {
    icon?: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type TechnologyUpdateFormValidationValues = {
    icon?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechnologyUpdateFormOverridesProps = {
    TechnologyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    icon?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechnologyUpdateFormProps = React.PropsWithChildren<{
    overrides?: TechnologyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    technology?: any;
    onSubmit?: (fields: TechnologyUpdateFormInputValues) => TechnologyUpdateFormInputValues;
    onSuccess?: (fields: TechnologyUpdateFormInputValues) => void;
    onError?: (fields: TechnologyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechnologyUpdateFormInputValues) => TechnologyUpdateFormInputValues;
    onValidate?: TechnologyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TechnologyUpdateForm(props: TechnologyUpdateFormProps): React.ReactElement;
