document.addEventListener('DOMContentLoaded', () => {
    // Get the canvas and WebGL context
    const canvas = document.getElementById('shader-canvas');
    const gl = canvas.getContext('webgl2');
    
    if (!gl) {
        console.error('WebGL2 is not supported in your browser');
        return;
    }

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Shader source code (from your cloudy.frag file)
    const vertexShaderSource = `#version 300 es
        in vec2 a_position;
        void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    const fragmentShaderSource = `#version 300 es
        precision highp float;
        
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        
        out vec4 fragColor;
        
        // Improved random hash function
        float hash(vec2 p) {
            p = fract(p * vec2(123.34, 345.45));
            p += dot(p, p + 34.345);
            return fract(p.x * p.y);
        }
        
        // Smooth value noise
        float noise(vec2 p){
            vec2 i = floor(p);
            vec2 f = fract(p);
        
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
        
            vec2 u = f * f * (3.0 - 2.0 * f);
        
            return mix(mix(a, b, u.x),
                       mix(c, d, u.x), u.y);
        }
        
        // Fractal Brownian Motion
        float fbm(vec2 p) {
            float value = 0.0;
            float amplitude = 0.5;
            float frequency = 1.0;
            for (int i = 0; i < 5; i++) {
                value += noise(p * frequency) * amplitude;
                frequency *= 2.0;
                amplitude *= 0.5;
            }
            return value;
        }
        
        void main() {
            vec2 uv = gl_FragCoord.xy / uResolution.xy;
            uv.x *= uResolution.x / uResolution.y; // Correct aspect ratio
            
            // Animate with time
            vec2 motion = vec2(uTime * 0.03, uTime * 0.05);
            float n = fbm(uv * 2.0 + motion);
            
            // Define colors (bluish to purplish)
            vec3 color1 = vec3(0.2, 0.4, 0.8); // Blue
            vec3 color2 = vec3(0.6, 0.3, 0.9); // Purple
            
            // Smooth blend between colors
            vec3 color = mix(color1, color2, smoothstep(0.3, 0.7, n));
            
            fragColor = vec4(color * n * 1.2, 1.0);
        }
    `;

    // Compile shader
    function compileShader(gl, source, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    // Create shader program
    const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
    
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Shader program linking error:', gl.getProgramInfoLog(program));
        return;
    }
    
    // Set up vertex buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    // Two triangles to cover the whole screen
    const positions = [
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
    ];
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
    // Set up attributes and uniforms
    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'uResolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'uTime');
    
    // Enable the position attribute
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    
    // Animation loop
    let time = 0;
    
    function render() {
        // Set the viewport to match the display size of the canvas
        const displayWidth = canvas.clientWidth * window.devicePixelRatio;
        const displayHeight = canvas.clientHeight * window.devicePixelRatio;
        
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            resizeCanvas();
        }
        
        // Clear the canvas
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        
        // Use the shader program
        gl.useProgram(program);
        
        // Set the resolution
        gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
        
        // Update time
        time += 0.01;
        gl.uniform1f(timeUniformLocation, time);
        
        // Draw the triangles
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        
        // Request the next frame
        requestAnimationFrame(render);
    }
    
    // Start the animation
    requestAnimationFrame(render);
});
