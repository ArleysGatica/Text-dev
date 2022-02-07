import React  from 'react';
import { Sidebar } from "../Sidebar/sidebar";
import { Input } from "./input";

export const InputPage = () => {
  return (
    <>
      <Sidebar>
        <div className="groupButton">
          <div>
            <p>{"<Input />"}</p>
            <Input />
          </div>
          <div>
            <p>{"<Input error />"}</p>
            <Input error />
          </div>
          <div>
            <p>{"  <Input disabled />"}</p>
            <Input disabled />
          </div>
          <div>
            <p>{"<Input helperText=Some interesting text error />"}</p>
            <Input helperText="Some interesting text" error />
          </div>
          <div>
            <p>{"<Input helperText=Some interesting text  />"}</p>
            <Input helperText="Some interesting text" />
          </div>
          <div>
            <p>{"<Input value=text />"}</p>
            <Input value="text" />
          </div>
          <div>
            <p>{"<Input size=sm/>"}</p>
            <Input size="sm" />
          </div>
          <div>
            <p>{"<Input size=md/>"}</p>
            <Input size="md" />
          </div>
          <div>
            <p>{" <Input multiline value=Some interesting text rows=4 />"}</p>
            <Input multiline value="Some interesting text" rows="4" />
          </div>
          <div>
            <p>{"<Input fullWidth/>"}</p>
            <Input fullWidth />
          </div>
        </div>
      </Sidebar>
    </>
  );
};
