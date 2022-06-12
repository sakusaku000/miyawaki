module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: "class",
    theme: {
        fontFamily:{
            sans:["Manrope", "sans-serif"]
        },
        extend:{
            colors:{
                saku:{
                    dark:{
                        100:"#161a1d",
                        200:"#0b090a"
                    },
                    light:{
                        100:"#ffffff",
                        200:"#f5f3f4",
                        300:"#d3d3d3",
                        400:"#b1a7a6"
                    },
                    primary:{
                        100:"#ffc6ff",
                    }
                }
            }
        }
    },
    important: true,
}