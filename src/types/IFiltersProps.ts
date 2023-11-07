import React from "react";

export interface IFiltersProps extends React.HTMLAttributes<HTMLDivElement> {
    filters: { name: string; value: string }[];
    currentValue: string;
    setValue(value: string): void;
}