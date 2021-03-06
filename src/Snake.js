class Snake {
    x = 25
    y = 25
    color = '#202020'

    speed = 6

    direction = [1, 0]

    tail = []

    ArrowUp() {
        if (!this.direction[1]) {
            this.direction = [0, -1]
        }
    }
    ArrowDown() {
        if (!this.direction[1]) {
            this.direction = [0, 1]
        }
    }
    ArrowLeft() {
        if (!this.direction[0]) {
            this.direction = [-1, 0]
        }
    }
    ArrowRight() {
        if (!this.direction[0]) {
            this.direction = [1, 0]
        }
    }

    move() {
        for (let i = this.tail.length - 1; i >= 0; i--) {
            let nextBlock = this.tail[i - 1]
            this.tail[i] = nextBlock ? nextBlock : { x: this.x, y: this.y }
        }

        this.x += this.direction[0]
        this.y += this.direction[1]
    }

    grow() {
        const lastTail = this.tail[this.tail.length - 1]
        const { x, y } = lastTail ? {
            x: lastTail.x - this.direction[0], y: lastTail.y - this.direction[1]
        } : {
            x: this.x - this.direction[0], y: this.y - this.direction[1]
        }

        this.tail.push({
            x,
            y,
            color: this.color
        })
    }

    onCollisionWithTail(exec) {
        for (let i of this.tail) {
            if (i.x == this.x && i.y == this.y) {
                exec()
                this.tail = []
                break
            }
        }
    }

}

export { Snake }