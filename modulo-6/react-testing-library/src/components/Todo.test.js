import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Todo from "./Todo";

describe('Tests for Todo component', () => {
    it('Should add new task when form has been submitted', async () => {
        //renderizar o componente
        const { getByTestId, getByText } = render(<Todo/>)
        
        //buscar o input
        const fieldNode = getByTestId("form-field")
        
        //digitar no input
        const newTask = "testing"
        fireEvent.change(
            fieldNode, 
            {target: {value: newTask}}
        )
        expect(fieldNode.value).toEqual(newTask)
        
        //buscar o botão
        const btnNode = getByTestId("form-btn")

        //clicar no botão
        fireEvent.click(btnNode)

        //buscar a tabela
        // const tableNode = getByTestId("table")
        // console.log(tableNode.innerHTML)

        //verificar se a tarefa foi add na tabela
        const tdNode = getByText(newTask)
        expect(tdNode).toBeDefined()
    })
})