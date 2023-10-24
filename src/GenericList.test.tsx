import { render } from "@testing-library/react";
import { GenericList } from "./GenericList";
type Data = { id: string };
const nameDataList: Array<Data & { name: string }> = [
  { id: "1", name: "ali" },
  { id: "2", name: "jeff" },
  { id: "3", name: "barry" },
];

describe("GenericList: Component", () => {

  it("should render", () => {

    const { getByText,   } = render(<GenericList data={nameDataList} renderItem={(item) => <li>{item.name}</li>} />)

    nameDataList.forEach(data => expect(getByText(data.name)).toBeDocument())
    expect(getByText('build me')).not.toBeNull();
  });

})
