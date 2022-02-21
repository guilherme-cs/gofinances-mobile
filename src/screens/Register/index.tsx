import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    function handleTransactionTypeSelect(type : 'up' | 'down') {
        setTransactionType(type);
    }

    function handleCloseSelectCategory() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategory() {
        setCategoryModalOpen(true);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder='Nome'/>
                    <Input placeholder='Preço'/>
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
                <Button title="Enviar"/>
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