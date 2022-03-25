import React, { useState } from "react";

interface TodosProps {}
export const Todos: React.FC<TodosProps> = ({}) => {
  const [todos, setTodos] = useState<{ todo: string; done: boolean }[]>([
    {
      todo: "Eat a pizza",
      done: true,
    },
    {
      todo: "Learn Cypress",
      done: false,
    },
  ]);

  const [add, setAdd] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="flex flex-col p-10 space-y-5 items-start">
      <div className="text-5xl font-bold">Todo List</div>
      <div className="flex space-x-10 items-start">
        {add ? (
          <div className="w-60 flex flex-col space-y-3">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="input"
              placeholder="New todo"
            />
            {error && (
              <div className="text-red-500">Input field is required</div>
            )}
            <div className="flex space-x-3">
              <button
                className="btn w-full"
                onClick={() => {
                  if (todo === "") {
                    setError(true);
                  } else {
                    setTodos((x) => [...x, { todo, done: false }]);
                    setTodo("");
                    setAdd(false);
                    setError(false);
                  }
                }}
              >
                Add
              </button>
              <button
                className="btn w-full"
                onClick={() => {
                  setAdd(false);
                  setTodo("");
                  setError(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="btn" onClick={() => setAdd(true)}>
            New Todo
          </button>
        )}
        <div className="flex flex-col w-96 space-y-4">
          {todos.map(({ todo, done }, idx) => {
            return (
              <div
                key={idx}
                className={`todo-card `}
                onDoubleClick={() => {
                  setTodos((x) =>
                    x.map((t, i) => {
                      let status = t.done;
                      if (i === idx) status = !status;
                      return { ...t, done: status };
                    })
                  );
                }}
              >
                <div className={`${done && "done"}`}>{todo}</div>
                {done && (
                  <div className="text-green-500 ml-auto text-lg font bold">
                    done
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
