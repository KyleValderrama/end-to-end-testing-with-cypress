import { Button } from "@mantine/core";
import React from "react";

interface LocatorsProps {}
export const Locators: React.FC<LocatorsProps> = ({}) => {
  return (
    <div className="flex flex-col p-10 space-y-5">
      <div className="space-y-5">
        <div className="text-5xl font-bold">Get</div>
        <div className="grid grid-cols-2 gap-4">
          <button className="btn">Button</button>
          <button className="btn btn-with-class">Button With Class</button>
          <button className="btn btn-with-class btn-with-many-class">
            Button With Many Class
          </button>
          <button className="btn" id="btn-with-id">
            Button With id
          </button>
          <button className="btn" type="submit">
            Button With Type Submit
          </button>
          <button className="btn" data-testid="btn-with-test-id">
            Button With Data Test id
          </button>
        </div>
      </div>
      <div className="space-y-5">
        <div className="text-5xl font-bold">Contains</div>
        <div className="grid grid-cols-2 gap-4">
          <button className="btn">Unique Text</button>
          <button className="btn btn-with-class">Not Unique Text</button>
          <button className="btn btn-with-class btn-with-many-class">
            Not Unique Text
          </button>
          <button className="btn" id="not-uniq-text">
            Not Unique Text
          </button>
          <button className="btn" type="submit">
            Not Unique Text
          </button>
          <button className="btn">Just Another Button</button>
        </div>
      </div>
      <div className="space-y-5">
        <div className="text-5xl font-bold">Find</div>
        <form className="grid grid-cols-2 gap-4">
          <button className="btn btn-1">Button in Form</button>
          <button className="btn btn-2">Button in Form</button>
        </form>
      </div>
    </div>
  );
};
