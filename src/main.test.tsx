import { render } from "@testing-library/react";
import { GenericList } from "./main";



describe("GenericList: Component", ()=> {

  it("should render", ()=>{

    const {getByText}= render(<GenericList />)
 
    expect(getByText('build me')).not.toBeNull();
  });

})
