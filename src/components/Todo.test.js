import { fireEvent, render } from "@testing-library/react";
import Todo from "./Todo";
import '@testing-library/jest-dom'

describe("Todo App Components", () => {
  
    test("Should have delete button ", async () => {
      const { getByTestId } = render(<Todo />);
      expect(getByTestId("delete-task")).toBeInTheDocument();
    });
  
    test("Should display the name of the task", async () => {
      const { getByTestId } = render(<Todo id="todo-1" name="Eat" />);
      expect(getByTestId("name-of-task")).toHaveTextContent("Eat");
    });

    test("Should have checkbox", async () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("checkbox")).toBeInTheDocument();
      });

    test("Should have edit button", async () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("edit-task")).toBeInTheDocument();
      });
  
    test("Should have a form for editing", async () => {
      const { getByTestId } = render(<Todo />);
      fireEvent.click(getByTestId("edit-task"));
      expect(getByTestId("edit-task-form")).toBeInTheDocument();
    });
  
    test("Should have input to change the task name", async () => {
      const { getByTestId } = render(
        <Todo id="todo-1" completed={false} name="taskName" />
      );
      fireEvent.click(getByTestId("edit-task"));
      expect(getByTestId("edit-task-input")).toBeInTheDocument();
    });
  
    test("Should have a cancel button", () => {
      const { getByTestId } = render(
        <Todo id="todo-1" completed={false} name="taskName" />
      );
      fireEvent.click(getByTestId("edit-task"));
      expect(getByTestId("edit-task-cancel")).toBeInTheDocument();
    });
  
    test("Should have a Save button", () => {
      const { getByTestId } = render(
        <Todo id="todo-1" completed={false} name="taskName" />
      );
      fireEvent.click(getByTestId("edit-task"));
      expect(getByTestId("edit-task-save")).toBeInTheDocument();
    });
  });
  
  