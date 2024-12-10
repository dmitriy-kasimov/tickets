export type TabType = {
    value: string
    label: string
}

export type TabsProps = {
    tabs: TabType[]
    activeTab: string
    onClickTab: (value: string) => void
    defaultValue?: string
}
