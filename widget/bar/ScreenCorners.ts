import options from "options"

const { corners, transparent } = options.bar

export default (monitor: number) => Widget.Window({
    monitor,
    class_name: "screen-corner",
    name: `corner${monitor}`,
    anchor: ["top", "bottom", "right", "left"],
    click_through: true,
    child: Widget.Box({
        class_name: "shadow",
        child: Widget.Box({
            class_name: "border",
            expand: true,
            child: Widget.Box({
                class_name: "corner",
                expand: true,
            }),
        }),
    }),
    setup: self => self
        .hook(corners, () => {
            self.toggleClassName("corners", corners.value > 0)
        })
        .hook(transparent, () => {
            self.toggleClassName("hidden", transparent.value)
        }),
})
