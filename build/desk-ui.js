document.addEventListener("DOMContentLoaded", function () {
    Vue.component("di-icon", {
        template: "<span class=\"di-icon\" :class=\"classObject\" :style=\"styleObject\"></span>",
        props: ["margin",
            "icon"],
        computed: {
            classObject: function () {
                return "di-icon--" + this.icon;
            },
            styleObject: function () {
                return {
                    "margin": this.margin && this.margin.replace(/ /g, "px ") + "px"
                };
            }
        }
    });
    Vue.component("di-layout", {
        template: "<div class=\"di-layout\" :style=\"styleObject\"><slot></div>",
        props: ["margin", "flex", "padding", "radius", "opacity",
            "bgcolor", "direction", "type", "color"],
        computed: {
            styleObject: function () {
                return {
                    "margin": this.margin && this.margin.replace(/ /g, "px ") + "px",
                    "flex": this.flex,
                    "padding": this.padding && this.padding.replace(/ /g, "px ") + "px",
                    "border-radius": this.radius && this.radius.replace(/ /g, "px ") + "px",
                    "opacity": this.opacity,
                    "background-color": this.bgcolor,
                    "flex-direction": (this.direction === "vertical" || this.direction === "v") && "column",
                    "display": this.type,
                    "color": this.color
                };
            }
        }
    });
    Vue.component("di-button", {
        template: "<button :class=\"classObject\" :style=\"styleObject\" :disabled=\"disabled\"><span v-if=\"icon\" :class=\"['di-icon', 'di-icon--' + icon]\"></span><span><slot></span></button>",
        props: ["margin", "flex", "padding", "radius", "opacity",
            "type", "icon", "disabled"],
        computed: {
            classObject: function () {
                var o = ["di-button"];
                if (this.type) {
                    o.push("di-button--" + this.type);
                }
                else {
                    o.push("di-button--plain");
                }
                if (this.disabled === "true") {
                    o.push("is-disabled");
                }
                return o;
            },
            styleObject: function () {
                return {
                    "margin": this.margin && this.margin.replace(/ /g, "px ") + "px",
                    "flex": this.flex,
                    "padding": this.padding && this.padding.replace(/ /g, "px ") + "px",
                    "border-radius": this.radius && this.radius.replace(/ /g, "px ") + "px",
                    "opacity": this.opacity
                };
            },
            iconDom: function () {
                if (this.icon) {
                    return "<span class=\"di-icon di-icon--" + this.icon + "\" style=\"margin-right: 5px;\"></span>";
                }
                return "";
            }
        }
    });
    new Vue({
        el: "#desk-ui",
    });
}, false);
//# sourceMappingURL=desk-ui.js.map