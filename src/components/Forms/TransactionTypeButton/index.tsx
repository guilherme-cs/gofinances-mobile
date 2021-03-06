import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import { Container, Icon, Title } from "./styled";

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

interface Props extends RectButton {
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
}

export function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {
    return (
        <Container isActive={isActive} type={type} { ...rest } >
            <Icon name={icons[type]} type={type}/>
            <Title>{title}</Title>
        </Container>
    )
}