import React from 'react'
import styled from "styled-components"
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form.js/Form';

function Incomes() {
  const {addIncome} = useGlobalContext()
  return (
    <IncomesStyled>
        <InnerLayout>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className='income-content'>
                    <div className='form-container'>
                      <Form/>
                    </div>
                    <div className='incomes'>
                    </div>
                </div>

            </InnerLayout>
        </InnerLayout>

    </IncomesStyled>
  )
}

const IncomesStyled =  styled.div`

`;


export default Incomes
