import { render } from "@testing-library/react";
import { GenericList } from "./GenericList";


describe("GenericList: Component", ()=> {

  it("should render", ()=>{

    const {debug}= render(<GenericList />)
 
    debug()
  });

})
