import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';

import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';
import { Input } from '../../components/Forms/Input';
import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

interface FormData {
    name: string;
    amount: string;
}

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit
    } = useForm();

    function handleTransactionTypeSelect(type : 'up' | 'down') {
        setTransactionType(type);
    }

    function handleCloseSelectCategory() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategory() {
        setCategoryModalOpen(true);
    }

    function handleRegister(form: FormData) {
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data)
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <InputForm control={control} name="name" placeholder='Nome' />
                    <InputForm control={control} name="amount" placeholder='Preço' />
                    <TransactionTypes>
                        <TransactionTypeButton 
                            type="up" title="Income" 
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}/>
                        <TransactionTypeButton 
                            type="down" title="Outcome" 
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}/>
                    </TransactionTypes>

                    <CategorySelectButton onPress={handleOpenSelectCategory} 
                        title={category.name}/>
                </Fields>
                <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect 
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategory}
                />
            </Modal>
        </Container>
    );
}