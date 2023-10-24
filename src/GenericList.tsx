

/**
 * Build the GenericList component which takes 2 props `data` and `renderItem` function. 
The component:
- render items in `data` collection using `renderItem` function 
- should be type safe
- should be extendable to accept other list items other than `name` and `lastName`
- should have unit tests to validate component logic
 */


// does it render
interface GenericListProps<T>  {
    data: T[]
    renderItem: (data: T) => React.ReactNode
}
export const GenericList = <T,>({ data, renderItem }: GenericListProps<T>) => <ul role="list">
    {data.map(item => renderItem(item))}
</ul>;
