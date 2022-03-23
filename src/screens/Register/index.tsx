import React, { useState, useEffect } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

const dataKey = '@gofinance:transactions';
interface FormData {
    name: string;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatorio'),
    amount: Yup.number().typeError('Informe um valor númerico').positive('O valor não pode ser negativo').required('O valor é obrigatorio')
})

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema) 
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

    async function handleRegister(form: FormData) {
        if(!transactionType)
            return Alert.alert("Selecione o tipo da transação");
        if(category.key === 'category')
            return Alert.alert("Selecione a categoria");
        
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data);
        try {
            await AsyncStorage.setItem(dataKey, JSON.stringify(data));
            return Alert.alert("Dados salvos com sucesso");
        } catch (error) {
            console.log(error);
            return Alert.alert("Não foi possível salvar");
        }
    }

    useEffect(() => {
        async function loadData() {
            const data = await AsyncStorage.getItem(dataKey);
            console.log(JSON.parse(data!));
        }

        loadData();
    },[])

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm control={control} 
                            name="name" 
                            placeholder='Nome' 
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.name && errors.name.message}/>

                        <InputForm control={control} 
                            name="amount" 
                            placeholder='Preço' 
                            keyboardType='numeric'
                            error={errors.amount && errors.amount.message}/>

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
        </TouchableWithoutFeedback>
    );
}