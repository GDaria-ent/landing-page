export {}
declare global {
    // @ts-ignore
    export type { Component, ComponentPublicInstance, ComputedRef, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, VNode, WritableComputedRef } from 'vue'
    import('vue')
    // @ts-ignore
}
