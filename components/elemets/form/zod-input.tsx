// @flow
import * as React from 'react';
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

type Props = {
    control: any;
    name: string;
    labelName: string;
    placeholder?: string;
    type?: string;
    disabled?: string;
};
export default function _ZodInput(props: Props) {
    const {control, name, labelName, placeholder, type, disabled} = props;
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{labelName}</FormLabel>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            type={type || "text"}
                            disabled={!!disabled}
                            {...field}
                            onChange={(e) => {
                                const value = type === "number" ? parseFloat(e.target.value) || 0 : e.target.value;
                                field.onChange(value);
                            }}
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    );
};