import { ReactNode } from "react";

interface Props<T> {
    data: T[],
    renderItem: (data:T) => ReactNode
}
export const GenericList = <T,>({data, renderItem}:Props<T>) => <section>{
data.map(i=>renderItem(i))}</section>;
