import { FC, useState, useEffect } from 'react'

import { HStack, VStack } from '@/shared/ui-kit/Stack'
import { Checkbox } from '@/shared/ui-kit/Checkbox'
import { Text } from '@/shared/ui-kit/Text'

import { CheckboxGroupProps } from '../model/types/CheckboxGroupProps.ts'

import { changeCheck } from '../model/helpers/changeCheck.ts'
import { changeAllChecks } from '../model/helpers/changeAllChecks.ts'

import cls from './CheckboxGroup.module.scss'

export const CheckboxGroup: FC<CheckboxGroupProps> = props => {
    const { options, checks, setChecks } = props

    const [all, setAll] = useState<boolean>(false)

    const allChecksAreActive = !checks.includes(false)

    const switchAll = () => {
        if (allChecksAreActive) {
            setChecks(changeAllChecks(checks, false))
        } else {
            setChecks(changeAllChecks(checks, true))
        }
    }

    useEffect(() => {
        if (allChecksAreActive) setAll(true)
        else setAll(false)
    }, [checks])

    return (
        <VStack gap={'4'}>
            <HStack gap={'4'}>
                <Checkbox
                    notDefined={checks.includes(true) && checks.includes(false)}
                    id={'all'}
                    checked={all}
                    onChange={switchAll}
                />
                <Text>Все</Text>
            </HStack>
            <VStack gap={'4'} className={cls.CheckboxGroup}>
                {options.map((option, index) => (
                    <HStack gap={'4'} key={option}>
                        <Checkbox
                            id={option}
                            checked={checks[index]}
                            onChange={() => setChecks(prev => changeCheck(prev, index))}
                        />
                        <Text>{option}</Text>
                    </HStack>
                ))}
            </VStack>
        </VStack>
    )
}
