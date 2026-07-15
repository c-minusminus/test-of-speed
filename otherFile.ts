function aFunctionInsideOtherFileTSThatAUserCreatedToTestMakecodesCompiler() {
    let a = 49.2
    a++
    a--
    a++
    a--
    a++
    a--
    a++
    a--
    a++
    a--
    a++
    a--
    if (true) {
        a++
    }
    if (false) {
        a++
    } else {
        a--
    }
    if (a == 49.2) {
        a = 49.3
    }
    pause(100)
    a += controller.dx()
    return a
}


namespace Engine3D {
    // By keeping this strictly synchronous, the compiler generates a pure JS function!
    export function projectVertex(x: number, y: number, z: number, fov: number) {
        let scale = fov / (fov + z);
        let projX = x * scale;
        let projY = y * scale;
        return { px: projX, py: projY };
    }

    export function doSomethingABCDEF(a: number, b: string) {
        return (() => {
            a += 1;
            pause(100)
            a += controller.dx()
            return a + " " + b + "!"
        })()
    }
}

Engine3D.projectVertex(0, 1, 2, 3)
Engine3D.doSomethingABCDEF(0, "Hello, World!")