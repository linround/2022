export default function per() {

    let timing = window.performance && window.performance.timing
    let navigation = window.performance && window.performance.navigation

// DNS 解析：
    let dns = timing.domainLookupEnd - timing.domainLookupStart
    console.log(dns)

// 总体网络交互耗时：
    let network = timing.responseEnd - timing.navigationStart
    console.log(network)

// 渲染处理：
    let processing = (timing.domComplete || timing.domLoading) - timing.domLoading
    console.log(processing)

// 可交互：
    let active = timing.domInteractive - timing.navigationStart
    console.log(active)
}