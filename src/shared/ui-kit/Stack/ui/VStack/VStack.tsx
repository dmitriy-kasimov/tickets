import { Flex, FlexProps } from '../Flex/Flex.tsx'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'start', children } = props
    return (
        <Flex direction='column' align={align} {...props}>
            {children}
        </Flex>
    )
}
