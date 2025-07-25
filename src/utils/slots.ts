import { ReactNode, Children, isValidElement, PropsWithChildren } from 'react'

type SlotComponents = Record<string, React.ComponentType<PropsWithChildren>>

type ExtractSlotsResult = {
  slots: Record<string, ReactNode>
  children: ReactNode
}

type NodePropsChildren = {
  props: {
    children: React.ReactNode
  }
}

export function extractSlots(
  children: ReactNode,
  slotComponents: SlotComponents
): ExtractSlotsResult {
  const slots: Record<string, ReactNode> = {}
  const content: ReactNode[] = []

  Children.forEach(children, child => {
    if (isValidElement(child)) {
      const matchedSlotKey = Object.entries(slotComponents).find(
        ([, component]) => child.type === component
      )?.[0]

      if (matchedSlotKey) {
        slots[matchedSlotKey] = (child as NodePropsChildren).props.children
        return
      }
    }

    content.push(child)
  })

  return {
    slots,
    children: content.length === 1 ? content[0] : content,
  }
}
