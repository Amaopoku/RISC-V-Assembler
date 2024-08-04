(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const binary_search = `
	.file	"binary_search.c"
	.option nopic
	.text
	.align	2
	.globl	binary_search
	.type	binary_search, @function
binary_search:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	a2,-44(s0)
	sw	a3,-48(s0)
	lw	a4,-48(s0)
	lw	a5,-44(s0)
	sub	a5,a4,a5
	srli	a4,a5,31
	add	a5,a4,a5
	srai	a5,a5,1
	mv	a4,a5
	lw	a5,-44(s0)
	add	a5,a5,a4
	sw	a5,-20(s0)
	lw	a4,-44(s0)
	lw	a5,-48(s0)
	ble	a4,a5,.L2
	li	a5,-1
	j	.L3
.L2:
	lw	a5,-20(s0)
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a5,0(a5)
	lw	a4,-40(s0)
	bne	a4,a5,.L4
	lw	a5,-20(s0)
	j	.L3
.L4:
	lw	a5,-20(s0)
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a5,0(a5)
	lw	a4,-40(s0)
	bge	a4,a5,.L5
	lw	a5,-20(s0)
	addi	a5,a5,-1
	mv	a3,a5
	lw	a2,-44(s0)
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	binary_search
	mv	a5,a0
	j	.L3
.L5:
	lw	a5,-20(s0)
	addi	a5,a5,1
	lw	a3,-48(s0)
	mv	a2,a5
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	binary_search
	mv	a5,a0
.L3:
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	binary_search, .-binary_search
	.align	2
	.globl	search
	.type	search, @function
search:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	addi	s0,sp,32
	sw	a0,-20(s0)
	sw	a1,-24(s0)
	sw	a2,-28(s0)
	lw	a5,-28(s0)
	addi	a5,a5,-1
	mv	a3,a5
	li	a2,0
	lw	a1,-24(s0)
	lw	a0,-20(s0)
	call	binary_search
	mv	a5,a0
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	addi	sp,sp,32
	jr	ra
	.size	search, .-search
	.align	2
	.globl	sort
	.type	sort, @function
sort:
	addi	sp,sp,-48
	sw	s0,44(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	zero,-20(s0)
	j	.L9
.L13:
	sw	zero,-24(s0)
	j	.L10
.L12:
	lw	a5,-24(s0)
	addi	a5,a5,1
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a4,0(a5)
	lw	a5,-24(s0)
	slli	a5,a5,2
	lw	a3,-36(s0)
	add	a5,a3,a5
	lw	a5,0(a5)
	bge	a4,a5,.L11
	lw	a5,-24(s0)
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a5,0(a5)
	sw	a5,-28(s0)
	lw	a5,-24(s0)
	addi	a5,a5,1
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a4,a4,a5
	lw	a5,-24(s0)
	slli	a5,a5,2
	lw	a3,-36(s0)
	add	a5,a3,a5
	lw	a4,0(a4)
	sw	a4,0(a5)
	lw	a5,-24(s0)
	addi	a5,a5,1
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a4,-28(s0)
	sw	a4,0(a5)
.L11:
	lw	a5,-24(s0)
	addi	a5,a5,1
	sw	a5,-24(s0)
.L10:
	lw	a4,-40(s0)
	lw	a5,-20(s0)
	sub	a5,a4,a5
	addi	a5,a5,-1
	lw	a4,-24(s0)
	blt	a4,a5,.L12
	lw	a5,-20(s0)
	addi	a5,a5,1
	sw	a5,-20(s0)
.L9:
	lw	a5,-40(s0)
	addi	a5,a5,-1
	lw	a4,-20(s0)
	blt	a4,a5,.L13
	nop
	mv	a0,a5
	lw	s0,44(sp)
	addi	sp,sp,48
	jr	ra
	.size	sort, .-sort
	.section	.rodata
	.align	2
.LC0:
	.word	0
	.word	6
	.word	8
	.word	4
	.word	3
	.word	9
	.word	7
	.word	5
	.text
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-64
	sw	ra,60(sp)
	sw	s0,56(sp)
	addi	s0,sp,64
	lui	a5,%hi(.LC0)
	lw	a7,%lo(.LC0)(a5)
	addi	a4,a5,%lo(.LC0)
	lw	a6,4(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a0,8(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a1,12(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a2,16(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a3,20(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a4,24(a4)
	addi	a5,a5,%lo(.LC0)
	lw	a5,28(a5)
	sw	a7,-52(s0)
	sw	a6,-48(s0)
	sw	a0,-44(s0)
	sw	a1,-40(s0)
	sw	a2,-36(s0)
	sw	a3,-32(s0)
	sw	a4,-28(s0)
	sw	a5,-24(s0)
	addi	a5,s0,-52
	li	a1,8
	mv	a0,a5
	call	sort
	addi	a5,s0,-52
	li	a2,8
	li	a1,9
	mv	a0,a5
	call	search
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,60(sp)
	lw	s0,56(sp)
	addi	sp,sp,64
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const binary_search_hanoi = `
	.file	"binary_search_hanoi.c"
	.option nopic
	.text
	.align	2
	.globl	binary_search
	.type	binary_search, @function
binary_search:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	a2,-44(s0)
	sw	a3,-48(s0)
	lw	a4,-48(s0)
	lw	a5,-44(s0)
	sub	a5,a4,a5
	srli	a4,a5,31
	add	a5,a4,a5
	srai	a5,a5,1
	mv	a4,a5
	lw	a5,-44(s0)
	add	a5,a5,a4
	sw	a5,-20(s0)
	lw	a4,-44(s0)
	lw	a5,-48(s0)
	ble	a4,a5,.L2
	li	a5,-1
	j	.L3
.L2:
	lw	a5,-20(s0)
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a5,0(a5)
	lw	a4,-40(s0)
	bne	a4,a5,.L4
	lw	a5,-20(s0)
	j	.L3
.L4:
	lw	a5,-20(s0)
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a5,0(a5)
	lw	a4,-40(s0)
	bge	a4,a5,.L5
	lw	a5,-20(s0)
	addi	a5,a5,-1
	mv	a3,a5
	lw	a2,-44(s0)
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	binary_search
	mv	a5,a0
	j	.L3
.L5:
	lw	a5,-20(s0)
	addi	a5,a5,1
	lw	a3,-48(s0)
	mv	a2,a5
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	binary_search
	mv	a5,a0
.L3:
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	binary_search, .-binary_search
	.align	2
	.globl	search
	.type	search, @function
search:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	addi	s0,sp,32
	sw	a0,-20(s0)
	sw	a1,-24(s0)
	sw	a2,-28(s0)
	lw	a5,-28(s0)
	addi	a5,a5,-1
	mv	a3,a5
	li	a2,0
	lw	a1,-24(s0)
	lw	a0,-20(s0)
	call	binary_search
	mv	a5,a0
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	addi	sp,sp,32
	jr	ra
	.size	search, .-search
	.align	2
	.globl	sort
	.type	sort, @function
sort:
	addi	sp,sp,-48
	sw	s0,44(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	zero,-20(s0)
	j	.L9
.L13:
	sw	zero,-24(s0)
	j	.L10
.L12:
	lw	a5,-24(s0)
	addi	a5,a5,1
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a4,0(a5)
	lw	a5,-24(s0)
	slli	a5,a5,2
	lw	a3,-36(s0)
	add	a5,a3,a5
	lw	a5,0(a5)
	bge	a4,a5,.L11
	lw	a5,-24(s0)
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a5,0(a5)
	sw	a5,-28(s0)
	lw	a5,-24(s0)
	addi	a5,a5,1
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a4,a4,a5
	lw	a5,-24(s0)
	slli	a5,a5,2
	lw	a3,-36(s0)
	add	a5,a3,a5
	lw	a4,0(a4)
	sw	a4,0(a5)
	lw	a5,-24(s0)
	addi	a5,a5,1
	slli	a5,a5,2
	lw	a4,-36(s0)
	add	a5,a4,a5
	lw	a4,-28(s0)
	sw	a4,0(a5)
.L11:
	lw	a5,-24(s0)
	addi	a5,a5,1
	sw	a5,-24(s0)
.L10:
	lw	a4,-40(s0)
	lw	a5,-20(s0)
	sub	a5,a4,a5
	addi	a5,a5,-1
	lw	a4,-24(s0)
	blt	a4,a5,.L12
	lw	a5,-20(s0)
	addi	a5,a5,1
	sw	a5,-20(s0)
.L9:
	lw	a5,-40(s0)
	addi	a5,a5,-1
	lw	a4,-20(s0)
	blt	a4,a5,.L13
	nop
	mv	a0,a5
	lw	s0,44(sp)
	addi	sp,sp,48
	jr	ra
	.size	sort, .-sort
	.align	2
	.globl	Hanoi
	.type	Hanoi, @function
Hanoi:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	a2,-44(s0)
	sw	a3,-48(s0)
	sw	zero,-20(s0)
	lw	a4,-36(s0)
	li	a5,1
	bne	a4,a5,.L15
	li	a5,1
	sw	a5,-20(s0)
	j	.L16
.L15:
	lw	a5,-36(s0)
	addi	a5,a5,-1
	lw	a3,-44(s0)
	lw	a2,-48(s0)
	lw	a1,-40(s0)
	mv	a0,a5
	call	Hanoi
	mv	a4,a0
	lw	a5,-20(s0)
	add	a5,a5,a4
	sw	a5,-20(s0)
	lw	a3,-48(s0)
	lw	a2,-44(s0)
	lw	a1,-40(s0)
	li	a0,1
	call	Hanoi
	mv	a4,a0
	lw	a5,-20(s0)
	add	a5,a5,a4
	sw	a5,-20(s0)
	lw	a5,-36(s0)
	addi	a5,a5,-1
	lw	a3,-48(s0)
	lw	a2,-40(s0)
	lw	a1,-44(s0)
	mv	a0,a5
	call	Hanoi
	mv	a4,a0
	lw	a5,-20(s0)
	add	a5,a5,a4
	sw	a5,-20(s0)
.L16:
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	Hanoi, .-Hanoi
	.align	2
	.globl	hThread1
	.type	hThread1, @function
hThread1:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	a2,-44(s0)
	lw	a1,-44(s0)
	lw	a0,-36(s0)
	call	sort
	lw	a2,-44(s0)
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	search
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	hThread1, .-hThread1
	.align	2
	.globl	hThread2
	.type	hThread2, @function
hThread2:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	a2,-44(s0)
	sw	a3,-48(s0)
	lw	a3,-48(s0)
	lw	a2,-44(s0)
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	Hanoi
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	hThread2, .-hThread2
	.section	.rodata
	.align	2
.LC0:
	.word	0
	.word	6
	.word	8
	.word	4
	.word	3
	.word	9
	.word	7
	.word	5
	.text
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-80
	sw	ra,76(sp)
	sw	s0,72(sp)
	addi	s0,sp,80
	lui	a5,%hi(.LC0)
	lw	a7,%lo(.LC0)(a5)
	addi	a4,a5,%lo(.LC0)
	lw	a6,4(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a0,8(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a1,12(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a2,16(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a3,20(a4)
	addi	a4,a5,%lo(.LC0)
	lw	a4,24(a4)
	addi	a5,a5,%lo(.LC0)
	lw	a5,28(a5)
	sw	a7,-72(s0)
	sw	a6,-68(s0)
	sw	a0,-64(s0)
	sw	a1,-60(s0)
	sw	a2,-56(s0)
	sw	a3,-52(s0)
	sw	a4,-48(s0)
	sw	a5,-44(s0)
	li	a5,1
	sw	a5,-20(s0)
	li	a5,2
	sw	a5,-24(s0)
	li	a5,3
	sw	a5,-28(s0)
	li	a5,4
	sw	a5,-32(s0)
	addi	a5,s0,-72
	li	a2,8
	li	a1,7
	mv	a0,a5
	call	hThread1
	sw	a0,-36(s0)
	lw	a3,-28(s0)
	lw	a2,-24(s0)
	lw	a1,-20(s0)
	lw	a0,-32(s0)
	call	hThread2
	sw	a0,-40(s0)
	li	a5,0
	mv	a0,a5
	lw	ra,76(sp)
	lw	s0,72(sp)
	addi	sp,sp,80
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const factorial_fibonacci = `
	.file	"factorial_fibonacci.c"
	.option nopic
	.text
	.align	2
	.globl	multiply_by_add
	.type	multiply_by_add, @function
multiply_by_add:
	addi	sp,sp,-48
	sw	s0,44(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	zero,-24(s0)
	sw	zero,-20(s0)
	j	.L2
.L3:
	lw	a4,-24(s0)
	lw	a5,-36(s0)
	add	a5,a4,a5
	sw	a5,-24(s0)
	lw	a5,-20(s0)
	addi	a5,a5,1
	sw	a5,-20(s0)
.L2:
	lw	a4,-20(s0)
	lw	a5,-40(s0)
	bltu	a4,a5,.L3
	lw	a5,-24(s0)
	mv	a0,a5
	lw	s0,44(sp)
	addi	sp,sp,48
	jr	ra
	.size	multiply_by_add, .-multiply_by_add
	.align	2
	.globl	factorial
	.type	factorial, @function
factorial:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	addi	s0,sp,32
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	bnez	a5,.L6
	li	a5,0
	j	.L7
.L6:
	lw	a4,-20(s0)
	li	a5,1
	bne	a4,a5,.L8
	li	a5,1
	j	.L7
.L8:
	lw	a5,-20(s0)
	addi	a5,a5,-1
	mv	a0,a5
	call	factorial
	mv	a5,a0
	mv	a1,a5
	lw	a0,-20(s0)
	call	multiply_by_add
	sw	a0,-20(s0)
	lw	a5,-20(s0)
.L7:
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	addi	sp,sp,32
	jr	ra
	.size	factorial, .-factorial
	.align	2
	.globl	fib
	.type	fib, @function
fib:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	sw	s1,20(sp)
	addi	s0,sp,32
	sw	a0,-20(s0)
	lw	a4,-20(s0)
	li	a5,1
	bgt	a4,a5,.L10
	lw	a5,-20(s0)
	j	.L11
.L10:
	lw	a5,-20(s0)
	addi	a5,a5,-1
	mv	a0,a5
	call	fib
	mv	s1,a0
	lw	a5,-20(s0)
	addi	a5,a5,-2
	mv	a0,a5
	call	fib
	mv	a5,a0
	add	a5,s1,a5
.L11:
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	lw	s1,20(sp)
	addi	sp,sp,32
	jr	ra
	.size	fib, .-fib
	.align	2
	.globl	hThread1
	.type	hThread1, @function
hThread1:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	lw	a0,-36(s0)
	call	fib
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	hThread1, .-hThread1
	.align	2
	.globl	hThread2
	.type	hThread2, @function
hThread2:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	lw	a5,-36(s0)
	mv	a0,a5
	call	factorial
	mv	a5,a0
	sw	a5,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	hThread2, .-hThread2
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	addi	s0,sp,32
	li	a5,12
	sw	a5,-20(s0)
	li	a5,8
	sw	a5,-24(s0)
	lw	a0,-20(s0)
	call	hThread1
	sw	a0,-28(s0)
	lw	a0,-24(s0)
	call	hThread2
	sw	a0,-32(s0)
	li	a5,0
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	addi	sp,sp,32
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const factorial = `
	.file	"factorial.c"
	.option nopic
	.text
	.align	2
	.globl	multiply_by_add
	.type	multiply_by_add, @function
multiply_by_add:
	addi	sp,sp,-48
	sw	s0,44(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	zero,-24(s0)
	sw	zero,-20(s0)
	j	.L2
.L3:
	lw	a4,-24(s0)
	lw	a5,-36(s0)
	add	a5,a4,a5
	sw	a5,-24(s0)
	lw	a5,-20(s0)
	addi	a5,a5,1
	sw	a5,-20(s0)
.L2:
	lw	a4,-20(s0)
	lw	a5,-40(s0)
	bltu	a4,a5,.L3
	lw	a5,-24(s0)
	mv	a0,a5
	lw	s0,44(sp)
	addi	sp,sp,48
	jr	ra
	.size	multiply_by_add, .-multiply_by_add
	.align	2
	.globl	factorial
	.type	factorial, @function
factorial:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	addi	s0,sp,32
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	bnez	a5,.L6
	li	a5,0
	j	.L7
.L6:
	lw	a4,-20(s0)
	li	a5,1
	bne	a4,a5,.L8
	li	a5,1
	j	.L7
.L8:
	lw	a5,-20(s0)
	addi	a5,a5,-1
	mv	a0,a5
	call	factorial
	mv	a5,a0
	mv	a1,a5
	lw	a0,-20(s0)
	call	multiply_by_add
	sw	a0,-20(s0)
	lw	a5,-20(s0)
.L7:
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	addi	sp,sp,32
	jr	ra
	.size	factorial, .-factorial
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	addi	s0,sp,32
	li	a5,8
	sw	a5,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	call	factorial
	mv	a5,a0
	sw	a5,-24(s0)
	lw	a5,-24(s0)
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	addi	sp,sp,32
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;


const fibonacci = `
	.file	"fibonacci.c"
	.option nopic
	.text
	.align	2
	.globl	fib
	.type	fib, @function
fib:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	sw	s1,20(sp)
	addi	s0,sp,32
	sw	a0,-20(s0)
	lw	a4,-20(s0)
	li	a5,1
	bgt	a4,a5,.L2
	lw	a5,-20(s0)
	j	.L3
.L2:
	lw	a5,-20(s0)
	addi	a5,a5,-1
	mv	a0,a5
	call	fib
	mv	s1,a0
	lw	a5,-20(s0)
	addi	a5,a5,-2
	mv	a0,a5
	call	fib
	mv	a5,a0
	add	a5,s1,a5
.L3:
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	lw	s1,20(sp)
	addi	sp,sp,32
	jr	ra
	.size	fib, .-fib
	.align	2
	.globl	return_function
	.type	return_function, @function
return_function:
	addi	sp,sp,-32
	sw	s0,28(sp)
	addi	s0,sp,32
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	lw	s0,28(sp)
	addi	sp,sp,32
	jr	ra
	.size	return_function, .-return_function
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	addi	s0,sp,32
	li	a5,18
	sw	a5,-20(s0)
	lw	a0,-20(s0)
	call	fib
	mv	a5,a0
	mv	a0,a5
	call	return_function
	sw	a0,-24(s0)
	lw	a5,-24(s0)
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	addi	sp,sp,32
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;


const fibonacci_gcd = `
	.file	"fibonacci_gcd.c"
	.option nopic
	.text
	.align	2
	.globl	gcd
	.type	gcd, @function
gcd:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	bne	a4,a5,.L2
	lw	a5,-36(s0)
	sw	a5,-20(s0)
	j	.L3
.L2:
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	ble	a4,a5,.L4
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	sub	a5,a4,a5
	sw	a5,-36(s0)
	j	.L5
.L4:
	lw	a4,-40(s0)
	lw	a5,-36(s0)
	sub	a5,a4,a5
	sw	a5,-40(s0)
.L5:
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	gcd
	sw	a0,-20(s0)
.L3:
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	gcd, .-gcd
	.align	2
	.globl	fib
	.type	fib, @function
fib:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	sw	s1,20(sp)
	addi	s0,sp,32
	sw	a0,-20(s0)
	lw	a4,-20(s0)
	li	a5,1
	bgt	a4,a5,.L8
	lw	a5,-20(s0)
	j	.L9
.L8:
	lw	a5,-20(s0)
	addi	a5,a5,-1
	mv	a0,a5
	call	fib
	mv	s1,a0
	lw	a5,-20(s0)
	addi	a5,a5,-2
	mv	a0,a5
	call	fib
	mv	a5,a0
	add	a5,s1,a5
.L9:
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	lw	s1,20(sp)
	addi	sp,sp,32
	jr	ra
	.size	fib, .-fib
	.align	2
	.globl	hThread1
	.type	hThread1, @function
hThread1:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	gcd
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	hThread1, .-hThread1
	.align	2
	.globl	hThread2
	.type	hThread2, @function
hThread2:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	lw	a0,-36(s0)
	call	fib
	sw	a0,-20(s0)
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	hThread2, .-hThread2
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	li	a5,1989
	sw	a5,-20(s0)
	li	a5,867
	sw	a5,-24(s0)
	li	a5,18
	sw	a5,-28(s0)
	lw	a1,-24(s0)
	lw	a0,-20(s0)
	call	hThread1
	sw	a0,-32(s0)
	lw	a0,-28(s0)
	call	hThread2
	sw	a0,-36(s0)
	li	a5,0
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const function_template = `
	.file	"function_template.c"
	.option nopic
	.text
	.align	2
	.globl	sum_numbers
	.type	sum_numbers, @function
sum_numbers:
	addi  sp,sp,-48  ; Increase the stack size for this function call
	sw  s0,44(sp)    ; Store the old frame pointer on the stack for later
	addi  s0,sp,48   ; Update the frame pointer
	sw  a0,-36(s0)   ; Store function arguments based on the frame pointer
	sw  zero,-20(s0) ; Set sum = 0
	sw  zero,-24(s0) ; Set i=0
	j .L2            ; Jump to the start of the for loop
.L3: ; This is the body of the for loop
	lw  a4,-20(s0) ; Load sum
	lw  a5,-24(s0) ; Load i
	add a5,a4,a5   ; a4 = sum + i
	sw  a5,-20(s0) ; Store sum (a5)
	lw  a5,-24(s0) ; Load i
	addi  a5,a5,1  ; i++
	sw  a5,-24(s0) ; Store i
.L2:
	lw  a4,-24(s0) ; Load i
	lw  a5,-36(s0) ; Load max (the function argument)
	blt a4,a5,.L3  ; Compare i and max
	lw  a5,-20(s0) ; If this point is reached, we have exited the for loop.
	               ; Load sum into a register
	mv  a0,a5      ; Move sum into the return value register
	lw  s0,44(sp)  ; Restore old frame pointer
	addi  sp,sp,48 ; Restore old stack pointer
	jr  ra         ; Jump to the return address (set by Call)
	.size	sum_numbers, .-sum_numbers
	.align	2
	.globl	main
	.type	main, @function
main:
	addi  sp,sp,-16   ; Increase the stack size for this function call
	sw  ra,12(sp)     ; Store the old return address on the stack for later
	sw  s0,8(sp)      ; Store the old frame pointer on the stack for later
	addi  s0,sp,16    ; Update the frame pointer
	li  a0,10         ; Set argument for function call
	call  sum_numbers ; Call sum_numbers function with psudo instruction
	mv  a5,a0         ; Move the return value to a general purpouse register
	mv  a0,a5         ; Move it back to return the value again...
	                  ; All optimizations are turned off
	lw  ra,12(sp)     ; Restore old return address
	lw  s0,8(sp)      ; Restore old frame pointer
	addi  sp,sp,16    ; Restore old stack pointer
	jr  ra            ; Jump to old return address
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const gcd = `
	.file	"gcd.c"
	.option nopic
	.text
	.align	2
	.globl	gcd
	.type	gcd, @function
gcd:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	bne	a4,a5,.L2
	lw	a5,-36(s0)
	sw	a5,-20(s0)
	j	.L3
.L2:
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	ble	a4,a5,.L4
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	sub	a5,a4,a5
	sw	a5,-36(s0)
	j	.L5
.L4:
	lw	a4,-40(s0)
	lw	a5,-36(s0)
	sub	a5,a4,a5
	sw	a5,-40(s0)
.L5:
	lw	a1,-40(s0)
	lw	a0,-36(s0)
	call	gcd
	sw	a0,-20(s0)
.L3:
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	gcd, .-gcd
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-32
	sw	ra,28(sp)
	sw	s0,24(sp)
	addi	s0,sp,32
	li	a5,64
	sw	a5,-20(s0)
	li	a5,48
	sw	a5,-24(s0)
	lw	a1,-24(s0)
	lw	a0,-20(s0)
	call	gcd
	sw	a0,-28(s0)
	lw	a5,-28(s0)
	mv	a0,a5
	lw	ra,28(sp)
	lw	s0,24(sp)
	addi	sp,sp,32
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const hanoi = `
	.file	"hanoi.c"
	.option nopic
	.text
	.align	2
	.globl	Hanoi
	.type	Hanoi, @function
Hanoi:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	a2,-44(s0)
	sw	a3,-48(s0)
	sw	zero,-20(s0)
	lw	a4,-36(s0)
	li	a5,1
	bne	a4,a5,.L2
	li	a5,1
	sw	a5,-20(s0)
	j	.L3
.L2:
	lw	a5,-36(s0)
	addi	a5,a5,-1
	lw	a3,-44(s0)
	lw	a2,-48(s0)
	lw	a1,-40(s0)
	mv	a0,a5
	call	Hanoi
	mv	a4,a0
	lw	a5,-20(s0)
	add	a5,a5,a4
	sw	a5,-20(s0)
	lw	a3,-48(s0)
	lw	a2,-44(s0)
	lw	a1,-40(s0)
	li	a0,1
	call	Hanoi
	mv	a4,a0
	lw	a5,-20(s0)
	add	a5,a5,a4
	sw	a5,-20(s0)
	lw	a5,-36(s0)
	addi	a5,a5,-1
	lw	a3,-48(s0)
	lw	a2,-40(s0)
	lw	a1,-44(s0)
	mv	a0,a5
	call	Hanoi
	mv	a4,a0
	lw	a5,-20(s0)
	add	a5,a5,a4
	sw	a5,-20(s0)
.L3:
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	Hanoi, .-Hanoi
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	li	a5,1
	sw	a5,-20(s0)
	li	a5,2
	sw	a5,-24(s0)
	li	a5,3
	sw	a5,-28(s0)
	li	a5,4
	sw	a5,-32(s0)
	lw	a3,-28(s0)
	lw	a2,-24(s0)
	lw	a1,-20(s0)
	lw	a0,-32(s0)
	call	Hanoi
	sw	a0,-36(s0)
	lw	a5,-36(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const prime_number_counter = `
	.file	"prime_number_counter.c"
	.option nopic
	.text
	.align	2
	.globl	multu
	.type	multu, @function
multu:
	addi	sp,sp,-48
	sw	s0,44(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	sw	zero,-20(s0)
	sw	zero,-24(s0)
	j	.L2
.L4:
	lw	a4,-36(s0)
	lw	a5,-24(s0)
	srl	a5,a4,a5
	andi	a5,a5,1
	beqz	a5,.L3
	lw	a4,-40(s0)
	lw	a5,-24(s0)
	sll	a5,a4,a5
	lw	a4,-20(s0)
	add	a5,a4,a5
	sw	a5,-20(s0)
.L3:
	lw	a5,-24(s0)
	addi	a5,a5,1
	sw	a5,-24(s0)
.L2:
	lw	a4,-24(s0)
	li	a5,31
	ble	a4,a5,.L4
	lw	a5,-20(s0)
	mv	a0,a5
	lw	s0,44(sp)
	addi	sp,sp,48
	jr	ra
	.size	multu, .-multu
	.align	2
	.globl	mult
	.type	mult, @function
mult:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	lw	a5,-36(s0)
	srai	a5,a5,31
	sw	a5,-24(s0)
	lw	a5,-40(s0)
	srai	a5,a5,31
	sw	a5,-28(s0)
	lw	a5,-24(s0)
	beqz	a5,.L7
	lw	a5,-36(s0)
	sub	a5,zero,a5
	sw	a5,-36(s0)
.L7:
	lw	a5,-28(s0)
	beqz	a5,.L8
	lw	a5,-40(s0)
	sub	a5,zero,a5
	sw	a5,-40(s0)
.L8:
	lw	a5,-36(s0)
	lw	a4,-40(s0)
	mv	a1,a4
	mv	a0,a5
	call	multu
	mv	a5,a0
	sw	a5,-20(s0)
	lw	a4,-24(s0)
	lw	a5,-28(s0)
	beq	a4,a5,.L9
	lw	a5,-20(s0)
	sub	a5,zero,a5
	sw	a5,-20(s0)
.L9:
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	mult, .-mult
	.align	2
	.globl	division
	.type	division, @function
division:
	addi	sp,sp,-48
	sw	s0,44(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	li	a5,1
	sw	a5,-20(s0)
	sw	zero,-24(s0)
	j	.L12
.L13:
	lw	a5,-40(s0)
	slli	a5,a5,1
	sw	a5,-40(s0)
	lw	a5,-20(s0)
	slli	a5,a5,1
	sw	a5,-20(s0)
.L12:
	lw	a4,-40(s0)
	lw	a5,-36(s0)
	ble	a4,a5,.L13
	j	.L14
.L15:
	lw	a5,-40(s0)
	srai	a5,a5,1
	sw	a5,-40(s0)
	lw	a5,-20(s0)
	srai	a5,a5,1
	sw	a5,-20(s0)
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	blt	a4,a5,.L14
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	sub	a5,a4,a5
	sw	a5,-36(s0)
	lw	a4,-24(s0)
	lw	a5,-20(s0)
	add	a5,a4,a5
	sw	a5,-24(s0)
.L14:
	lw	a4,-20(s0)
	li	a5,1
	bgt	a4,a5,.L15
	lw	a5,-24(s0)
	mv	a0,a5
	lw	s0,44(sp)
	addi	sp,sp,48
	jr	ra
	.size	division, .-division
	.align	2
	.globl	getRemainder
	.type	getRemainder, @function
getRemainder:
	addi	sp,sp,-48
	sw	s0,44(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	a1,-40(s0)
	li	a5,1
	sw	a5,-20(s0)
	j	.L18
.L19:
	lw	a5,-40(s0)
	slli	a5,a5,1
	sw	a5,-40(s0)
	lw	a5,-20(s0)
	slli	a5,a5,1
	sw	a5,-20(s0)
.L18:
	lw	a4,-40(s0)
	lw	a5,-36(s0)
	ble	a4,a5,.L19
	j	.L20
.L21:
	lw	a5,-40(s0)
	srai	a5,a5,1
	sw	a5,-40(s0)
	lw	a5,-20(s0)
	srai	a5,a5,1
	sw	a5,-20(s0)
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	blt	a4,a5,.L20
	lw	a4,-36(s0)
	lw	a5,-40(s0)
	sub	a5,a4,a5
	sw	a5,-36(s0)
.L20:
	lw	a4,-20(s0)
	li	a5,1
	bgt	a4,a5,.L21
	lw	a5,-36(s0)
	mv	a0,a5
	lw	s0,44(sp)
	addi	sp,sp,48
	jr	ra
	.size	getRemainder, .-getRemainder
	.align	2
	.globl	floorSqrt
	.type	floorSqrt, @function
floorSqrt:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	lw	a5,-36(s0)
	beqz	a5,.L24
	lw	a4,-36(s0)
	li	a5,1
	bne	a4,a5,.L25
.L24:
	lw	a5,-36(s0)
	j	.L26
.L25:
	li	a5,1
	sw	a5,-20(s0)
	li	a5,1
	sw	a5,-24(s0)
	j	.L27
.L28:
	lw	a5,-20(s0)
	addi	a5,a5,1
	sw	a5,-20(s0)
	lw	a1,-20(s0)
	lw	a0,-20(s0)
	call	mult
	sw	a0,-24(s0)
.L27:
	lw	a4,-24(s0)
	lw	a5,-36(s0)
	ble	a4,a5,.L28
	lw	a5,-20(s0)
	addi	a5,a5,-1
.L26:
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	floorSqrt, .-floorSqrt
	.align	2
	.globl	delay
	.type	delay, @function
delay:
	addi	sp,sp,-48
	sw	s0,44(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	zero,-20(s0)
	j	.L30
.L31:
	lw	a5,-20(s0)
	addi	a5,a5,1
	sw	a5,-20(s0)
.L30:
	lw	a4,-20(s0)
	lw	a5,-36(s0)
	blt	a4,a5,.L31
	nop
	lw	s0,44(sp)
	addi	sp,sp,48
	jr	ra
	.size	delay, .-delay
	.align	2
	.globl	check_prime
	.type	check_prime, @function
check_prime:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	sw	a0,-36(s0)
	sw	zero,-24(s0)
	lw	a0,-36(s0)
	call	floorSqrt
	sw	a0,-28(s0)
	sw	zero,-32(s0)
	lw	a4,-36(s0)
	li	a5,1
	bgt	a4,a5,.L33
	li	a5,0
	j	.L34
.L33:
	lw	a4,-36(s0)
	li	a5,2
	beq	a4,a5,.L35
	lw	a4,-36(s0)
	li	a5,3
	bne	a4,a5,.L36
.L35:
	li	a5,1
	j	.L34
.L36:
	li	a5,2
	sw	a5,-20(s0)
	j	.L37
.L39:
	lw	a1,-20(s0)
	lw	a0,-36(s0)
	call	getRemainder
	sw	a0,-32(s0)
	lw	a5,-32(s0)
	bnez	a5,.L38
	li	a5,0
	j	.L34
.L38:
	lw	a5,-20(s0)
	addi	a5,a5,1
	sw	a5,-20(s0)
.L37:
	lw	a4,-20(s0)
	lw	a5,-28(s0)
	ble	a4,a5,.L39
	li	a5,1
.L34:
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	check_prime, .-check_prime
	.align	2
	.globl	main
	.type	main, @function
main:
	addi	sp,sp,-48
	sw	ra,44(sp)
	sw	s0,40(sp)
	addi	s0,sp,48
	li	a5,1
	sw	a5,-28(s0)
	li	a5,500
	sw	a5,-32(s0)
	sw	zero,-20(s0)
	lw	a5,-28(s0)
	sw	a5,-24(s0)
	j	.L41
.L43:
	lw	a0,-24(s0)
	call	check_prime
	sw	a0,-36(s0)
	lw	a5,-36(s0)
	beqz	a5,.L42
	lw	a5,-20(s0)
	addi	a5,a5,1
	sw	a5,-20(s0)
.L42:
	lw	a5,-24(s0)
	addi	a5,a5,1
	sw	a5,-24(s0)
.L41:
	lw	a4,-24(s0)
	lw	a5,-32(s0)
	ble	a4,a5,.L43
	lw	a5,-20(s0)
	mv	a0,a5
	lw	ra,44(sp)
	lw	s0,40(sp)
	addi	sp,sp,48
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const syscall = `
main:
    ######################################### 
    # this file will show you how to use    #
    # system calls in the BRISC-V emulator! #
    ######################################### 
    # 
    # let's start by loading an integer from the user
    # putting 4 in register t0 an calling ecall does that
    addi t0, zero, 4
    # after ecall is run, a box will pop up in the console
    # write a (small) number and press enter to continue 
    ecall
    # let's print that integer multiplied by two 
    slli a0, a0, 1
    addi t0, zero, 1
    ecall
    # now, let's try working with strings and memory
    # read a character 
    addi t0, zero, 5
    ecall
    # print the same character and a newline
    addi t0, zero, 2
    ecall
    addi t0, zero, 2
    addi a0, zero, 13 
    ecall
    # let's statically allocate a string "HELLO!"
    # we start this by creating a read-only data section
    .rodata
.HELLO:
    # strings should end with the null terminator \\0
    # the null terminator's binary value is 0!
    # we split HELLO!\\0 into two 32bit words:
    # HELL and O!00 - note that thats an "O!" and 2 zeros
    # we write HELL in ascii:
    # H - 0x48
    # E - 0x45
    # L - 0x4C
    # since this is a little-endian architecture, we 
    # write HELL in reverse - LEHH
    .word 0x4C4C4548
    # now we write the second part O!00
    .word 0x0000214F
    # this section is parsed when you load the program - 
    # not when the instruction pointer runs over it.
    # as soon as you loaded the program, you should see 
    # this string in the memory pane's data section, 
    # somewhere close to the bottom of it. 
    # 
    # now we can go back to a text section that has code
    .text
    # print the string "HELLO!\\n"
    addi t0, zero, 3         # this is the string printing syscall 
    lui a0, %hi(.HELLO)      # this loads the top 20 bits 
                             # of .HELLO address into a0
    addi a0, a0, %lo(.HELLO) # this loads the bottom 12 bits
    addi a1, zero, 7         # length of the string
    ecall
    # print characters '!', '\\n', '-'
    addi t0, zero, 2
    addi a0, zero, 33 
    ecall
    addi t0, zero, 2
    addi a0, zero, 13 
    ecall
    addi t0, zero, 2
    addi a0, zero, 45 
    ecall
    # load a string of length 10
    addi t0, zero, 6
    addi a0, sp, -10
    addi a1, zero, 10
    ecall
    # print the same string again 
    addi t0, zero, 3
    addi a0, sp, -10  # address of the string start
    addi a1, zero, 10  # length of the string
    ecall
    # finally, let's try and allocate some memory with SBRK 
    addi t0, zero, 7     # SBRK syscall 
    addi a0, zero, 16    # allocate 4 words
    ecall                # heap memory (purple) should be 
                         # 4 lines long in the memory pane
    # try and deallocate some memory with SBRK 
    addi t0, zero, 7     # SBRK syscall 
    addi a0, zero, -16   # deallocate 4 words
    ecall                # heap memory (purple) should be 
                         # 0 lines long in the memory pane
    # allocate too many words
    addi t0, zero, 7     # SBRK syscall 
    addi a0, zero, 10000 # allocate 2500 words
    ecall                # an error should pop up
    # return
	jr	ra
`;

const test = `
	.file	"test.c"
	.option nopic
	.text
	.align	2
	.globl	main

	.type	main, @function
main:
	addi	sp,sp,-16
	sw	s0,12(sp)
	addi	s0,sp,16
	li	a5,513
	mv	a0,a5
	lw	s0,12(sp)
	addi	sp,sp,16
	jr	ra
	.size	main, .-main
	.ident	"GCC: (GNU) 7.2.0"
`;

const problem = `
    main:
    addi a0, zero, -1 
    addi a1, zero, 0
    addi a2, zero, 100
    addi a3, zero, -5
    addi a4, zero, -10
    slt  a5, a3, a4
    slt  a6, a3, a4
    foo:
    add a0, a0, a0
    addi a1,a1,1
    blt a1,a2,foo
`;

exports.files = {
    binary_search: binary_search,
    binary_search_hanoi: binary_search_hanoi,
    factorial_fibonacci: factorial_fibonacci,
    factorial: factorial,
    fibonacci: fibonacci,
    fibonacci_gcd: fibonacci_gcd,
    function_template: function_template,
    gcd: gcd,
    hanoi: hanoi,
    prime_number_counter: prime_number_counter,
    syscall: syscall,
    test: test,
    problem: problem
};
},{}],2:[function(require,module,exports){
var opcode_map = {
    // R-types
    "add": "0110011",
    "sub": "0110011",
    "and": "0110011",
    "or": "0110011",
    "xor": "0110011",
    "slt": "0110011",
    "sra": "0110011",
    "srl": "0110011",
    "sll": "0110011",
    // I-types
    "addi": "0010011",
    "andi": "0010011",
    "ori": "0010011",
    "xori": "0010011",
    "slti": "0010011",
    "sltiu": "0010011",
    "srai": "0010011",
    "srli": "0010011",
    "slli": "0010011",
    // Branches
    "beq":  "1100011",
    "bne":  "1100011",
    "blt":  "1100011",
    "bge":  "1100011",
    "bltu": "1100011",
    "bgeu": "1100011",
    // U-type
    "lui":   "0110111",
    "auipc": "0010111",
};

var funct7_map = {
    "add": "0000000",
    "sub": "0100000",
    "and": "0000000",
    "or": "0000000",
    "xor": "0000000",
    "slt": "0000000",
    "sra": "0100000",
    "srl": "0000000",
    "sll": "0000000"
};

var funct3_map = {
    // R-types
    "add": "000",
    "sub": "000",
    "and": "111",
    "or": "110",
    "xor": "100",
    "slt": "010",
    "sra": "101",
    "srl": "101",
    "sll": "001",
    // I-types
    "addi": "000",
    "andi": "111",
    "ori": "110",
    "xori": "100",
    "slti": "010",
    "sltiu": "011",
    "srai": "101",
    "srli": "101",
    "slli": "001",
    // Branches
    "beq": "000",
    "bne": "001",
    "blt": "100",
    "bge": "101",
    "bltu": "110",
    "bgeu": "111",
    "sb": "000",
    "sh": "001",
    "sw": "010"
};


function toBinary(value, bits) {
    var result = "";
    for (var i = 0; i < bits; i++) {
        result = String(value & 1) + result;
        value = value >> 1;
    }
    return result;
}

/**
 * Breakdown takes an instruction and breaks it down to its components
 * Returns the three arrays. Each array element is one part of the instruction, i.e. opcode,
 * registers, etc. The first array specifies the range of each column, the second one is the
 * name of each column, and the third is the value of the column.
 */
function breakdown(instruction) {
    var symbols = instruction.symbols; 

    var bitrange = [];
    var headers = [];
    var values = [];

    if (instruction.subtype === "R_TYPE") {
        bitrange = [31,   25,  24, 20,  19, 15,  14,   12,  11, 7, 6,     0];
        headers =  ["funct7",  "rs2" ,  "rs1" ,  "funct3",  "rd" , "opcode"];
        var rd =  toBinary(symbols[1], 5);
        var rs1 = toBinary(symbols[2], 5);
        var rs2 = toBinary(symbols[3], 5);
        values = [funct7_map[symbols[0]], rs2, rs1, funct3_map[symbols[0]], rd, opcode_map[symbols[0]]];
    }
    else if (instruction.subtype === "I_TYPE") { 
        bitrange = [31, 20,  19, 15,  14,   12,  11, 7,  6,     0];
        headers =  ["imm" ,  "rs1" ,  "funct3",  "rd" ,  "opcode"];
        var rd =  toBinary(symbols[1], 5);
        var rs1 = toBinary(symbols[2], 5);
        var imm = toBinary(Number(symbols[3]), 12);
        values = [imm, rs1, funct3_map[symbols[0]], rd, opcode_map[symbols[0]]];
    }
    else if (instruction.subtype === "S_TYPE") {
        bitrange = [31, 25,  24, 20,  19, 15,  14, 12,  11, 7,  6,     0];
        headers =  ["imm" ,  "rs2" ,  "rs1" ,  "010" ,  "imm",  "opcode"];
        var rs1 = toBinary(symbols[2], 5);
        var rs2 = toBinary(symbols[1], 5);
        var imm = toBinary(symbols[3], 12);
        values = [imm.substring(0, 7), rs2, rs1, funct3_map[symbols[0]], imm.substring(7, 12), "0100011"];
    }
    else if (instruction.subtype === "U_TYPE") {
        bitrange = [31,       12,  11, 7,  6,     0];
        headers =  ["imm[31:12]",  "rd" ,  "opcode"];
        var rs  = toBinary(symbols[1], 5);
        var imm = toBinary(symbols[2], 20);
        values = [imm.substring(0, 21), rs, opcode_map[symbols[0]]];
    }
    else if (instruction.subtype === "SB_TYPE") {
        bitrange = [31,         25,  24, 20,  19, 15,  14,   12,  11,         7,  6,     0];
        headers =  ["imm[12|10:5]",  "rs2" ,  "rs1" ,  "funct3",  "imm[4:1|11]",  "opcode"];
        var rs1 = toBinary(symbols[1], 5);
        var rs2 = toBinary(symbols[2], 5);
        var imm = toBinary(symbols[3], 12);
        values = [imm[0]+imm.substring(2,8), rs2, rs1, funct3_map[symbols[0]], imm.substring(8, 12)+imm[1], opcode_map[symbols[0]]];
    }
    // this is where it get's weird - JAL and JALR have pretty different encodings
    else if (instruction.symbols[0] == "jal") {
        bitrange = [31,                 12,   11, 7,  6,     0];
        headers =  ["imm[20|10:1|11|19:12]",  "rd" ,  "opcode"];
        var rd  = toBinary(symbols[1], 5);
        var imm = toBinary(symbols[2], 21);
        values = [imm[0]+imm.substring(10, 20)+imm[9]+imm.substring(1, 9), rd, "1101111"];
    }
    else if (instruction.symbols[0] == "jalr") {
        bitrange = [31,      20,  19, 15,  14, 12,  11, 7, 6,     0];
        headers =  ["imm[11:0]",  "rs1" ,  "000" ,  "rd" , "opcode"];
        var rd  = toBinary(symbols[1], 5);
        var rs1 = toBinary(symbols[2], 5);
        var imm = toBinary(symbols[3], 12);
        values = [imm, rs1, "000", rd, "1100111"];
    }
    else if (instruction.symbols[0] === "ecall") {
        bitrange = [31,    20,  19, 15,  14,   12,  11, 7,  6,     0];
        headers  = ["funct12",  "rs1" ,  "funct3",  "rd" ,  "opcode"];
        values   = ["000000000000", "00000", "000", "00000", "1110011"];
    }
    else if (instruction.subtype === "PSEUDO") {
        bitrange = [""];
        headers  = ["Pseudo-Instructions don't have a breakdown"];
        values   = [""];
    } 
    else {
        bitrange = [""];
        headers  = ["Cannot breakdown instruction"];
        values   = [""];
    }

    return { "bitrange": bitrange, "headers": headers, "values": values };
}


/**
 * Takes the breakdown of the instruction and returns it's decimal value
 */
function instr2dec(instruction, all_instructions) {
    var bd = breakdown(instruction);
    var bits = bd.values.join('');
    
    // in case of pseudo instructions
    if (bits === "")
        return "NaN";
    else 
        return parseInt(bits, 2);
}


module.exports.breakdown = breakdown;
module.exports.instr2dec = instr2dec;

},{}],3:[function(require,module,exports){
'use strict'
var parser              = require("./parser.js");
var breakdown           = require("./breakdown.js");
var syscalls            = require("./syscalls.js");

exports.original_asm    = "";
exports.instructions    = [];
exports.labels          = {};
exports.regfile         = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
exports.IP              = 0;
exports.breakpoints     = [];
exports.memory          = [];
// Memory ranges sets up the starts and ends of each section
// The end address of one section is the beginning address of the next section 
// (so as to not have to do non-word addresses, e.g., text: [0-7], data: [8-31])
exports.memory_ranges   = {
    text_start:  null,
    text_end:    null,
    data_start:  null,
    data_end:    null,
    heap_start:  null,
    heap_end:    null,
    stack_start: null,
    stack_end:   null,
};
exports.memory_labels = {};

exports.END_INSTR_FRONT = 43; // The last frontend kernel instruction. Upon reaching this, the code enters an infinite loop.
exports.END_INSTR_BACK  = undefined; // The last backend kernel instruction. Upon reaching this, the code enters an infinite loop.
exports.STACK_ORIGIN    = 1536; // Max memory address. TODO: make private
exports.OP_COUNT        = 0;
exports.MAX_INSTR       = 10000000; // the maximum number of instructions before a program is considered to never halt



function warn(warning_text) {
    console.log(warning_text);
    alert(warning_text);
}


/**
 * The jump and branch immediates are stored as relative addresses.
 * The emulator steps through lines, not through adresses, i.e., there 
 * can be multiple lines per address, for example:
 *      .size	search, .-search
 *      .align	2
 *      .globl	sort
 *      .type	sort, @function
 *  sort:
 *      addi	sp,sp,-48
 *
 * This function, given the absolute address of the instruction to jump to, 
 * finds the appropriate line in the instruction list.
 */
function _find_line_number_with_address(instructions, abs_addr) {
    for (var i=0; i<instructions.length; i++) 
        if (instructions[i].address == abs_addr)
            return instructions[i].text_line_number;

    return null;
}

/**
 * Linker does several things:
 *     1. Asks the parser for a dictionary of text section labels
 *     2. Asks the parser for a list of data emitting directives and data labels 
 *     3. Populates the memory with the values of data emmitting directives 
 *     4. Updates the jump and branch relative addresses with label positions. 
 *     5. Updates the instructions referencing data labels with the newly calculated memory addresses
 *
 * After the linker is done, no instruction (except perhaps CALL) should be storing a label as a string.
 *
 * Assumes that the function is called after setup_memory.
 */
function linker(instructions) {
    var data_start_addr = exports.memory_ranges.data_start;
    
    /////////////////////////////////////////////////////////
    // First, ask the parser for text section labels,      //
    // and second, the data section labels and allocations //
    /////////////////////////////////////////////////////////
    var labels_and_memory = parser.parse_file_for_labels_and_memory(instructions);
    var text_labels = labels_and_memory[0]; // dictionary of text labels
    var allocations = labels_and_memory[1]; // list of labels and data emitting directives 
    var memory_labels = {};                 // dictionary of data labels filled from allocations 
    
    //////////////////////////////////////////////////////////////////////////////
    // Thirdly, updates the memory with the values of data emitting directives //
    //////////////////////////////////////////////////////////////////////////////
    for (var i=0; i<allocations.length; i++) {
        if (allocations[i].type      === "LABEL") {
            memory_labels[allocations[i].value] = data_start_addr;
            _add_comment_to_address(data_start_addr, " <-- " + allocations[i].value);
        }
        else if (allocations[i].type === "ALLOCATION") {
            switch (allocations[i].size) {
                case ".word":
                    // TODO: check if negative values are parsed and stored properly
                    _write_word(data_start_addr, allocations[i].value);
                    data_start_addr += 4;
                    break;
                default:
                    //TODO raise an error
            };
        }
    }
    
    // update the data section size
    exports.memory_ranges.data_end = data_start_addr;
    // update the heap section size and position
    exports.memory_ranges.heap_start = data_start_addr;
    exports.memory_ranges.heap_end = data_start_addr;

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Fourthly, updates jump, branch and call instruction immediates with relative address values //
    /////////////////////////////////////////////////////////////////////////////////////////////////
    for (var i=0; i<instructions.length; i++) {
        var ins = instructions[i];
        // Label can be a second, third or fourth symbol, as in:
        //      J     .LBL     
        //      LA    S1, .LBL
        //      JALR  S1, S2, .LBL
        if (ins.subtype === "SB_TYPE" || ins.subtype === "UJ_TYPE" || ins.subtype === "PSEUDO")
            for (var label_pos=1; label_pos<4; label_pos++)
                try {
                    if ('type' in ins.symbols[label_pos]) 
                        // If the immediate is an actual value, replace the object with that value 
                        if (ins.symbols[label_pos].type === "IMM") 
                            ins.symbols[label_pos] = ins.symbols[label_pos].value;
                        // Otherwise, map the label to an actual value and use that instead of the object
                        else if (ins.symbols[label_pos].type === "LABEL") {
                            var label_name = ins.symbols[label_pos].value;
                            var address_offset = text_labels[label_name].address - ins.address; // relative address
                            ins.symbols[label_pos] = address_offset;
                        }
                } catch {
                }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Lastly, updates the instructions referencing data labels with the newly calculated memory addresses //
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    for (var i=0; i<instructions.length; i++) {
        var ins = instructions[i];
        // Label can be a second, third or fourth symbol:
        if (ins.type    === "INSTRUCTION") 
            switch (ins.subtype) {
                // I-type and S-type instructions have a 12-bit immediate, so they can only load bottom 
                // 12 bits of an address. That's why they use a LUI to load the top 20. That means that 
                // I- and S-type instruction immediates should just be AND-ed with 0xfff, while LUI imm
                // should be imm >> 12, which is later shifted back by the emulator. The same logic is 
                // applied in the case of AUIPC.
                case "I_TYPE": 
                case "S_TYPE":
                    for (var label_pos=1; label_pos<4; label_pos++)
                        try {
                            if ('type' in ins.symbols[label_pos]) 
                                // If the immediate is an actual value, replace the object with that value 
                                if (ins.symbols[label_pos].type === "IMM") 
                                    ins.symbols[label_pos] = ins.symbols[label_pos].value;
                                // Otherwise, map the label to an actual value and use that instead of the object
                                else if (ins.symbols[label_pos].type === "LABEL") {
                                    var label_name = ins.symbols[label_pos].value;
                                    // bottom 12 bits of the absolute address, as I- and S-type always use %LO
                                    var address_offset = memory_labels[label_name] & 0xfff; 
                                    ins.symbols[label_pos] = address_offset;
                                }
                        } catch {
                        }
                    break;
                case "U_TYPE":
                    for (var label_pos=1; label_pos<4; label_pos++)
                        try {
                            if ('type' in ins.symbols[label_pos]) 
                                // If the immediate is an actual value, replace the object with that value 
                                if (ins.symbols[label_pos].type === "IMM") 
                                    ins.symbols[label_pos] = ins.symbols[label_pos].value;
                                // Otherwise, map the label to an actual value and use that instead of the object
                                else if (ins.symbols[label_pos].type === "LABEL") {
                                    var label_name = ins.symbols[label_pos].value;
                                    // bottom 12 bits of the absolute address, as I- and S-type always use %LO
                                    var address_offset = memory_labels[label_name] >> 12; 
                                    ins.symbols[label_pos] = address_offset;
                                }
                        } catch {
                        }
                    break;
                default: 
            }
    }
}


/**
 * Executes the instruction by updating the regfile, 
 * and returns the new instruction pointer.
 */
function execute_instruction(instruction, regfile, memory, IP, labels) {
    var error = false;
    
    // labels & directives just move down 
    if (instruction.type === "LABEL" || instruction.type === "DIRECTIVE" || instruction.type === "COMMENT") {
        IP = IP + 1;
    }
    // syscalls call a different module
    else if (instruction.type === "SYSCALL") {
    }
    // Instructions get processed
    else if (instruction.type === "INSTRUCTION")  {
        var symbols = instruction.symbols;

        // R-type instructions
        if (instruction.subtype === "R_TYPE") {
            var rd  = symbols[1];
            var rs1 = symbols[2];
            var rs2 = symbols[3];
            IP += 1;

            switch (symbols[0]) {
                case "add": 
                    regfile[rd] = regfile[rs1]  +   regfile[rs2];
                    break;
                case "and":
                    regfile[rd] = regfile[rs1]  &    regfile[rs2];
                    break;
                case "or": 
                    regfile[rd] = regfile[rs1]  |    regfile[rs2];
                    break;
                case "sub":
                    regfile[rd] = regfile[rs1]  -    regfile[rs2];
                    break;
                case "sll":
                    regfile[rd] = regfile[rs1]  <<   regfile[rs2];
                    break;
                case "srl":
                    regfile[rd] = regfile[rs1]  >>>  regfile[rs2];
                    break;
                case "sra":
                    // Note that this will convert values in [2**31, 2**32-1] to the 2's complement values,
                    // so there's a conversion at the end of the switch statement 
                    regfile[rd] = regfile[rs1]  >>   regfile[rs2]; 
                    break;
                case "xor":
                    regfile[rd] = regfile[rs1]  ^    regfile[rs2];
                    break;
                case "slt":
                    // First converts values to signed, then compares
                    regfile[rd] = (regfile[rs1] >> 0) < (regfile[rs2] >> 0) ? 1 : 0;
                    break;
                case "sltu":
                    regfile[rd] = regfile[rs1] < regfile[rs2] ? 1 : 0;
                    break;
                default:
                    warn("Not supported: " + symbols[0]);
                    error = true;
            }

            // Make sure that values are always stored as uint32
            regfile[rd] = new Uint32Array([regfile[rd]])[0];
        }
        else if (instruction.subtype === "I_TYPE") {
            var rd  = symbols[1];
            var rs1 = symbols[2];
            var imm = symbols[3] >>> 0;

            IP += 1;
            switch (symbols[0]) {
                case "lb":
                    regfile[rd] = _sign_extend_8 (_read_byte(new Uint32Array([imm + regfile[rs1]])[0]));
                    break;
                case "lh":
                    regfile[rd] = _sign_extend_16(_read_half(new Uint32Array([imm + regfile[rs1]])[0]));
                    break;
                case "lw":
                    regfile[rd] =                 _read_word(new Uint32Array([imm + regfile[rs1]])[0]);
                    break;
                case "lbu":
                    regfile[rd] =                 _read_byte(new Uint32Array([imm + regfile[rs1]])[0]);
                    break;
                case "lhu":
                    regfile[rd] =                 _read_half(new Uint32Array([imm + regfile[rs1]])[0]);
                    break;
                case "addi":
                    regfile[rd] = regfile[rs1] + imm
                    break;
                case "xori":
                    regfile[rd] = regfile[rs1] ^ imm;
                    break;
                case "ori":
                    regfile[rd] = regfile[rs1] | imm;
                    break;
                case "andi":
                    regfile[rd] = regfile[rs1] & imm;
                    break;
                case "slti":
                    regfile[rd] = (regfile[rs1] >> 0) < (imm >> 0) ? 1 : 0;
                    break;
                case "sltiu":
                    regfile[rd] = regfile[rs1] < imm;
                    break;
                case "slli":
                    if (imm >> 0 < 0) warn("Immediate cannot be negative.");
                    regfile[rd] = regfile[rs1] << imm;
                    break;
                case "srli":
                    if (imm >> 0 < 0) warn("Immediate cannot be negative.");
                    regfile[rd] = regfile[rs1] >>> imm;
                    break;
                case "srai":
                    if (imm >> 0 < 0) warn("Immediate cannot be negative.");
                    regfile[rd] = regfile[rs1] >> imm;
                    break;
                default: 
                    warn("Not supported: " + symbols[0]);
                    error = true;
            }
            // Make sure that values are always stored as uint32
            regfile[rd] = new Uint32Array([regfile[rd]])[0];
        }
        else if (instruction.subtype === "S_TYPE") {
            var rs1 = symbols[1];
            var rs2 = symbols[2];
            var imm = symbols[3];

            if (imm + regfile[rs2] > exports.STACK_ORIGIN) 
                warn("Writting to out of bounds location " + String(imm + regfile[rs2]));

            IP += 1;

            switch (symbols[0]) {
                case "sb":
                    _write_byte(new Uint32Array([imm + regfile[rs2]])[0], regfile[rs1]);
                    break;
                case "sh":
                    _write_half(new Uint32Array([imm + regfile[rs2]])[0], regfile[rs1]);
                    break;
                case "sw":
                    _write_word(new Uint32Array([imm + regfile[rs2]])[0], regfile[rs1]);
                    break;
                default:
                    warn("Not supported: " + symbols[0]);
                    error = true;
            }
        }
        else if (instruction.subtype === "SB_TYPE") {
            var rs1 = symbols[1];
            var rs2 = symbols[2];
            var imm = symbols[3];
            var new_line = _find_line_number_with_address(exports.instructions, instruction.address + imm);

            switch (symbols[0]) {
                case "beq":
                    regfile[rs1]          ==  regfile[rs2]          ?  IP = new_line : IP += 1;
                    break;
                case "bne":
                    regfile[rs1]          !=  regfile[rs2]          ?  IP = new_line : IP += 1;
                    break;
                case "blt":
                    (regfile[rs1] >> 0)   <   (regfile[rs2] >> 0)   ?  IP = new_line : IP += 1;
                    break;
                case "bge":
                    (regfile[rs1] >> 0)   >=  (regfile[rs2] >> 0)   ?  IP = new_line : IP += 1;
                    break;
                case "bltu":
                    regfile[rs1]          <   regfile[rs2]          ?  IP = new_line : IP += 1;
                    break;
                case "bgeu":
                    regfile[rs1]          >=  regfile[rs2]          ?  IP = new_line : IP += 1;
                    break;
                default: 
                    warn("Not supported: " + symbols[0]);
                    error = true;
            }
        }
        else if (instruction.subtype === "U_TYPE") {
            switch (symbols[0]) {
                case "lui": 
                    regfile[symbols[1]] = (symbols[2] << 12);
                    IP += 1;
                    break;
                case "auipc": 
                    var immediate = symbols[2];
                    regfile[symbols[1]] = instruction.address + (immediate << 12);
                    IP += 1;
                    break;
                default: 
                    warn("Not supported: " + symbols[0]);
                    error = true;
            }
            // Make sure that values are always stored as uint32
            regfile[symbols[1]] = new Uint32Array([regfile[symbols[1]]])[0];
        }
        else if (instruction.subtype === "UJ_TYPE") {
            switch (symbols[0]) {
                case "jal": 
                    var imm = symbols[2];
                    var new_line = _find_line_number_with_address(exports.instructions, instruction.address + imm);
                    regfile[symbols[1]] = instruction.address + 4;
                    IP = new_line;
                    break;
                case "jalr":
                    var imm = symbols[3];
                    var calc_addr = (regfile[symbols[2]] + imm) & 0xFFFFFFFE; // zero out the last bit
                    var new_line = _find_line_number_with_address(exports.instructions, calc_addr); 
                    regfile[symbols[1]] = instruction.address + 4;
                    IP = new_line; 
                    break;
                default:
                    warn("Not supported: " + symbols[0]);
                    error = true;
            }
        }
        else if (instruction.subtype === "CL_TYPE") {
            switch (symbols[0]) {
                case "ecall":
                    // TODO: still haven't confirmed which registers are used by ECALL. This is a temporary guess.
                    var syscall_type = exports.regfile[5]; // Register t0

                    var syscall_output  = syscalls.handle_syscall(syscall_type);
                    var done = syscall_output[0];
                    var error_message = syscall_output[1];
                    
                    if (done)
                        IP += 1;

                    if (error_message != undefined)
                        warn(error_message);
                    break
                default: 
                    warn("Not supported: " + symbols[0]);
                    error = true;
            }
        }
        else if (instruction.subtype === "PSEUDO") {
            switch (symbols[0]) {
                // according to https://www.imperialviolet.org/2016/12/31/riscv.html
                // CALL should be converted as: 
                // call offset ->  auipc x6, offset >> 12; 
                //                 jalr x1,x6,offset & 0xfff
                // If I'm parsing this right, it just creates a position independent address to which it jumps
                // and saves the return address in RA (according to the ABI?)
                case "call":
                    //IP = labels[symbols[1].value].text_line_number;
                    var imm = instruction.address + symbols[1];
                    IP = _find_line_number_with_address(exports.instructions, imm);
                    regfile[1] = instruction.address + 4; // store return address in ra
                    break;
                case "la":
                default: 
                    warn("Not supported: " + symbols[0]);
                    error = true;
            }
        }
    }
    else { 
        warn("Not supported: " + instruction.original);
        error = true;
    }

    // If regfile[2] has been updated, the stack size should change
    exports.memory_ranges.stack_end = exports.regfile[2];

    // Zero out the zero register, just in case. Cheaper than checking.
    regfile[0] = 0;
    
    return [IP, error];
}

function get_stack_size() {
    return exports.STACK_ORIGIN - exports.regfile[2];
}


function single_step() {
    var instruction = exports.instructions[exports.IP];

    var result =  execute_instruction(instruction, exports.regfile, exports.memory, exports.IP, exports.labels);
    var new_IP = result[0];
    var error = result[1];
    exports.IP = new_IP;

    return error;
}

function run() {
    // Take a step, so it does not get stuck on breakpoints
    single_step();
    
    // Keep going until you hit a breakpoint, the end, or perform MAX_INSTR instructions
    for (var instr_cnt=0; instr_cnt < exports.MAX_INSTR; instr_cnt++) 
        if (exports.IP != exports.END_INSTR_FRONT && exports.IP != exports.END_INSTR_BACK && exports.breakpoints.indexOf(exports.IP) == -1) {
            var error = single_step();
            if (error == true)
                break;
        }
        else 
            break;
    if (instr_cnt == exports.MAX_INSTR) 
        warn("Program did not finish in " + exports.MAX_INSTR + " instructions");
}

function setup_emulator(asm) {
    exports.original_asm = asm;

    exports.instructions = parser.parse_file_for_instructions(asm);

    // Number of instructions in the assembly file
    exports.OP_COUNT        = exports.instructions.reduce((a, b) => a + (b.type === "INSTRUCTION" ? 1 : 0), 0);
    
    // Calculate the two locations in the frontend and the backend that are an infinite loop and should stop execution
    // TODO: replace with an exit syscall
    exports.END_INSTR_FRONT = 8;                                         
    exports.END_INSTR_BACK  = asm.split(/\r?\n/).length - 7;
    
    // setup memory ranges for the code section
    exports.memory_ranges.text_start = 0;
    exports.memory_ranges.text_end   = exports.OP_COUNT * 4  // TODO double check if we should add an extra 4 

    // setup memory ranges for the data and heap sections
    exports.memory_ranges.data_start = exports.memory_ranges.text_end;
    exports.memory_ranges.data_end   = exports.memory_ranges.text_end;
    exports.memory_ranges.heap_start = exports.memory_ranges.text_end;
    exports.memory_ranges.heap_end   = exports.memory_ranges.text_end;

    exports.memory          = setup_memory(exports.instructions, asm);
    linker(exports.instructions);
    
}

function setup_memory(instructions, asm) {
    // Sets up memory as a byte array
    var memory = [];

    // zero out the memory 
    for (var i=0; i<exports.STACK_ORIGIN; i++) {
        memory[i] = {
            value:     0,
            comment:   "" 
        };
    }

    // stack beginning and end. End address should be smaller than the beginning 
    exports.memory_ranges.stack_start = exports.STACK_ORIGIN;
    exports.memory_ranges.stack_end   = exports.STACK_ORIGIN;

    for (var i=0; i<instructions.length; i++) {
        if (instructions[i].type == "INSTRUCTION") {
            var instr_line = instructions[i].line_number;
            var instr_dec  = breakdown.instr2dec(instructions[i], instructions);
            var comment    = instructions[i].original;

            for (var b=0; b<4; b++) 
                memory[instr_line*4+b] = {
                    value:     _get_byte(instr_dec, b),
                    comment:   comment
                };

        }
    }
    
    return memory;
}

//function _update_memory_location(line, value) {
    //exports.memory[line].value = value;
//}

function _get_byte(value, byte_number) {
    // Returns the n-th byte of an unsigned value 
    
    if (isNaN(value))
        return value;

    var signed_value = (value & (0xFF << (8 * byte_number))) >> (8 * byte_number); 

    // for some reason, this is treated as a signed value, causing us to have to do this horror: 
    return new Uint8Array([signed_value])[0];
}

function _add_comment_to_address(address, comment) {
    exports.memory[address].comment = comment;
}

function _write_word(address, value) {
    // Writes a four bytes, between address and address + 3

    // If a value is in [0, 2**32], we assume it is unsigned and store it as such.
    if (value > Math.pow(2, 32) - 1)
        warn("Cannot convert value " + value + " to a 32-bit unsigned value");
    // If it is in [-2**31, 2**31-1], we assume it is signed and convert it as such
    if (value < - Math.pow(2, 31))
        warn("Cannot convert value " + value + " to a 32-bit signed value");

    exports.memory[address    ].value = _get_byte(value, 0);
    exports.memory[address + 1].value = _get_byte(value, 1);
    exports.memory[address + 2].value = _get_byte(value, 2);
    exports.memory[address + 3].value = _get_byte(value, 3);
}

function _write_half(address, value) {
    // Writes a two bytes, to the address and address + 1 

    // If a value is in [0, 2**16], we assume it is unsigned and store it as such.
    if (value > Math.pow(2, 16) - 1)
        warn("Cannot convert value " + value + " to a 16-bit unsigned value");
    // If it is in [-2**15, 2**15-1], we assume it is signed and convert it as such
    if (value < - Math.pow(2, 15))
        warn("Cannot convert value " + value + " to a 15-bit signed value");


    exports.memory[address    ].value = _get_byte(value, 0);
    exports.memory[address + 1].value = _get_byte(value, 1);
}

function _write_byte(address, value) {
    // Writes a byte to the address

    // If a value is in [0, 2**8], we assume it is unsigned and store it as such.
    if (value > Math.pow(2, 8) - 1)
        warn("Cannot convert value " + value + " to a 8-bit unsigned value");
    // If it is in [-2**7, 2**7-1], we assume it is signed and convert it as such
    if (value < - Math.pow(2, 7))
        warn("Cannot convert value " + value + " to a 8-bit signed value");

    exports.memory[address    ].value = _get_byte(value, 0);
}

function _read_word(address) {
    // Reads four bytes at addresses [addr+0, addr+1, addr+2, addr+3] and stitches them up
    
    if (isNaN(exports.memory[address + 0].value) ||
        isNaN(exports.memory[address + 1].value) ||
        isNaN(exports.memory[address + 2].value) ||
        isNaN(exports.memory[address + 3].value))
        return NaN;


    return (exports.memory[address    ].value << 0 ) +
           (exports.memory[address + 1].value << 8 ) +
           (exports.memory[address + 2].value << 16) +
           (exports.memory[address + 3].value << 24);
}

function _read_half(address) {
    // Reads two bytes at addresses [addr+0, addr+1] and stitches them up

    if (isNaN(exports.memory[address + 0].value) ||
        isNaN(exports.memory[address + 1].value))
        return NaN;

    return (exports.memory[address    ].value << 0) +
           (exports.memory[address + 1].value << 8);
}

function _read_byte(address) {
    // Reads one byte at the address

    if (isNaN(exports.memory[address + 0].value))
        return NaN;

    return exports.memory[address    ].value << 0;
}

function _signed_to_unsigned(value) {
    // Takes a value in the range [-2**31, 2**31 - 1]
    // and converts it to an unsigned value in [0, 2**32 - 1]

    if (value > Math.pow(2, 31) - 1 || value < (- Math.pow(2, 31)))
        warn("Cannot convert signed value " + value + " to a 32-bit unsigned value");

    if (value > 0)
        return value & 0x7fffffff;
    else 
        return 0xffffffff + value + 1;
}

function _unsigned_to_signed(value) {
    // Takes a value in the range [0, 2**32 - 1]
    // and converts it to an signed value in [2**31, 2**31 - 1]

    if (value > Math.pow(2, 32) - 1 || value < 0)
        warn("Cannot convert unsigned value " + value + " to a 32-bit signed value");

    if (value < 0x8000000)
        return value;
    else
        return value - 0xffffffff - 1;
}

function _sign_extend_8(value) {
    // Takes an 8 bit signed value, and repeats the MSB bit 
    return 0xffffff00 * (value & 0x80 != 0) + value;
}

function _sign_extend_16(value) {
    // Takes an 16 bit signed value, and repeats the MSB bit 
    return 0xffff0000 * (value & 0x8000 != 0) + value;
}

function reset() {
    exports.regfile      = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    exports.memory       = setup_memory(exports.instructions, exports.original_asm)
    // TODO: don't call linker twice, call it from setup_memory
    linker(exports.instructions);
    exports.IP           = 0;
    //exports.breakpoints  = [];
}

exports.get_stack_size      = get_stack_size;
exports.setup_emulator      = setup_emulator;
exports.single_step         = single_step;
exports.run                 = run;
exports.reset               = reset;
exports.read_word           = _read_word;
exports.get_byte            = _get_byte;





},{"./breakdown.js":2,"./parser.js":9,"./syscalls.js":10}],4:[function(require,module,exports){
// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const flatten = list => list.reduce((a, b) => (b !== null) ? a.concat(Array.isArray(b) ? flatten(b) : b) : a, []);
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "LINE$ebnf$1", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["R_OP", "LINE$ebnf$1"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "R_TYPE",  symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$2", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["I_OP", "LINE$ebnf$2"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "I_TYPE",  symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$3", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["S_OP", "LINE$ebnf$3"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "S_TYPE",  symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$4", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["U_OP", "LINE$ebnf$4"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "U_TYPE",  symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$5", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$5", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["SB_OP", "LINE$ebnf$5"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "SB_TYPE", symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$6", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$6", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["UJ_OP", "LINE$ebnf$6"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "UJ_TYPE", symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$7", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$7", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["PSEUDO_OP", "LINE$ebnf$7"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "PSEUDO",  symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$8", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$8", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["CL_OP", "LINE$ebnf$8"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "CL_TYPE", symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$9", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$9", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["REMAPPED_R_TYPE_OP", "LINE$ebnf$9"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "R_TYPE",  symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$10", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$10", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["REMAPPED_I_TYPE_OP", "LINE$ebnf$10"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "I_TYPE",  symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$11", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$11", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["REMAPPED_UJ_TYPE_OP", "LINE$ebnf$11"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "UJ_TYPE", symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$12", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$12", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["REMAPPED_SB_TYPE_OP", "LINE$ebnf$12"], "postprocess": function(d) { return {type: "INSTRUCTION", subtype: "SB_TYPE", symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$13", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$13", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["LABEL_COLON", "LINE$ebnf$13"], "postprocess": function(d) { return {type: "LABEL",                           symbols: flatten(d)}; }},
    {"name": "LINE$ebnf$14", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$14", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["DIRECTIVE", "LINE$ebnf$14"], "postprocess": d => flatten(d)[0]},
    {"name": "LINE$ebnf$15", "symbols": ["COMMENT"], "postprocess": id},
    {"name": "LINE$ebnf$15", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "LINE", "symbols": ["_", "LINE$ebnf$15"], "postprocess": function(d) { return {type: "COMMENT",                         symbols: []        }; }},
    {"name": "R_OP", "symbols": ["_", "R_TYPE", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "REG", "_"]},
    {"name": "I_OP", "symbols": ["_", "I_TYPE", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "IMM", "_"]},
    {"name": "I_OP", "symbols": ["_", "I_TYPE", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "LO", "_"]},
    {"name": "I_OP", "symbols": ["_", "I_TYPE", "__", "REG", "_", "COMMA", "_", "IMM", "_", "LPAREN", "_", "REG", "_", "RPAREN", "_"], "postprocess": d => [d[1], d[3], d[11], d[7]]},
    {"name": "I_OP", "symbols": ["_", "I_TYPE", "__", "REG", "_", "COMMA", "_", "LO", "_", "LPAREN", "_", "REG", "_", "RPAREN", "_"], "postprocess": d => [d[1], d[3], d[11], d[7]]},
    {"name": "S_OP", "symbols": ["_", "S_TYPE", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "IMM", "_"]},
    {"name": "S_OP", "symbols": ["_", "S_TYPE", "__", "REG", "_", "COMMA", "_", "IMM", "_", "LPAREN", "_", "REG", "_", "RPAREN", "_"], "postprocess": d => [d[1], d[3], d[11], d[7]]},
    {"name": "S_OP", "symbols": ["_", "S_TYPE", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "LO", "_"]},
    {"name": "S_OP", "symbols": ["_", "S_TYPE", "__", "REG", "_", "COMMA", "_", "LO", "_", "LPAREN", "_", "REG", "_", "RPAREN", "_"], "postprocess": d => [d[1], d[3], d[11], d[7]]},
    {"name": "U_OP$subexpression$1", "symbols": [/[lL]/, /[uU]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "U_OP", "symbols": ["_", "U_OP$subexpression$1", "__", "REG", "_", "COMMA", "_", "IMM", "_"]},
    {"name": "U_OP$subexpression$2", "symbols": [/[lL]/, /[uU]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "U_OP", "symbols": ["_", "U_OP$subexpression$2", "__", "REG", "_", "COMMA", "_", "HI", "_"]},
    {"name": "U_OP$subexpression$3", "symbols": [/[aA]/, /[uU]/, /[iI]/, /[pP]/, /[cC]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "U_OP", "symbols": ["_", "U_OP$subexpression$3", "__", "REG", "_", "COMMA", "_", "IMM", "_"]},
    {"name": "SB_OP", "symbols": ["_", "SB_TYPE", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "LABEL", "_"]},
    {"name": "SB_OP", "symbols": ["_", "SB_TYPE", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "IMM", "_"]},
    {"name": "UJ_OP$subexpression$1", "symbols": [/[jJ]/, /[aA]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "UJ_OP", "symbols": ["_", "UJ_OP$subexpression$1", "__", "REG", "_", "COMMA", "_", "LABEL", "_"]},
    {"name": "UJ_OP$subexpression$2", "symbols": [/[jJ]/, /[aA]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "UJ_OP", "symbols": ["_", "UJ_OP$subexpression$2", "__", "REG", "_", "COMMA", "_", "IMM", "_"]},
    {"name": "UJ_OP$subexpression$3", "symbols": [/[jJ]/, /[aA]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "UJ_OP", "symbols": ["_", "UJ_OP$subexpression$3", "__", "IMM", "_"], "postprocess": d => [d[1], 1, d[3]]},
    {"name": "UJ_OP$subexpression$4", "symbols": [/[jJ]/, /[aA]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "UJ_OP", "symbols": ["_", "UJ_OP$subexpression$4", "__", "LABEL", "_"], "postprocess": d => [d[1], 1, d[3]]},
    {"name": "UJ_OP$subexpression$5", "symbols": [/[jJ]/, /[aA]/, /[lL]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "UJ_OP", "symbols": ["_", "UJ_OP$subexpression$5", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "IMM", "_"]},
    {"name": "UJ_OP$subexpression$6", "symbols": [/[jJ]/, /[aA]/, /[lL]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "UJ_OP", "symbols": ["_", "UJ_OP$subexpression$6", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "LABEL", "_"]},
    {"name": "UJ_OP$subexpression$7", "symbols": [/[jJ]/, /[aA]/, /[lL]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "UJ_OP", "symbols": ["_", "UJ_OP$subexpression$7", "__", "REG", "_", "COMMA", "_", "IMM", "_", "LPAREN", "_", "REG", "_", "RPAREN", "_"], "postprocess": d => [d[1], d[3], d[11], d[7]]},
    {"name": "UJ_OP$subexpression$8", "symbols": [/[jJ]/, /[aA]/, /[lL]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "UJ_OP", "symbols": ["_", "UJ_OP$subexpression$8", "__", "REG", "_"], "postprocess": d => [d[1], 1,    d[3],  0   ]},
    {"name": "CL_OP$subexpression$1", "symbols": [/[eE]/, /[cC]/, /[aA]/, /[lL]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "CL_OP", "symbols": ["_", "CL_OP$subexpression$1", "_"]},
    {"name": "REMAPPED_R_TYPE_OP$subexpression$1", "symbols": [/[nN]/, /[eE]/, /[gG]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_R_TYPE_OP", "symbols": ["_", "REMAPPED_R_TYPE_OP$subexpression$1", "__", "REG", "_", "COMMA", "_", "REG", "_"], "postprocess": function(d) {return ["sub",  d[3], 0,    d[7]]}},
    {"name": "REMAPPED_R_TYPE_OP$subexpression$2", "symbols": [/[sS]/, /[nN]/, /[eE]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_R_TYPE_OP", "symbols": ["_", "REMAPPED_R_TYPE_OP$subexpression$2", "__", "REG", "_", "COMMA", "_", "REG", "_"], "postprocess": function(d) {return ["sltu", d[3], 0,    d[7]]}},
    {"name": "REMAPPED_R_TYPE_OP$subexpression$3", "symbols": [/[sS]/, /[lL]/, /[tT]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_R_TYPE_OP", "symbols": ["_", "REMAPPED_R_TYPE_OP$subexpression$3", "__", "REG", "_", "COMMA", "_", "REG", "_"], "postprocess": function(d) {return ["slt",  d[3], d[7], 0   ]}},
    {"name": "REMAPPED_R_TYPE_OP$subexpression$4", "symbols": [/[sS]/, /[gG]/, /[tT]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_R_TYPE_OP", "symbols": ["_", "REMAPPED_R_TYPE_OP$subexpression$4", "__", "REG", "_", "COMMA", "_", "REG", "_"], "postprocess": function(d) {return ["slt",  d[3], 0,    d[7]]}},
    {"name": "REMAPPED_R_TYPE_OP$subexpression$5", "symbols": [/[nN]/, /[oO]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_R_TYPE_OP", "symbols": ["_", "REMAPPED_R_TYPE_OP$subexpression$5", "_"], "postprocess": function(d) {return ["add",  0,    0,    0   ]}},
    {"name": "REMAPPED_I_TYPE_OP$subexpression$1", "symbols": [/[mM]/, /[vV]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_I_TYPE_OP", "symbols": ["_", "REMAPPED_I_TYPE_OP$subexpression$1", "__", "REG", "_", "COMMA", "_", "REG", "_"], "postprocess": function(d) {return ["addi",  d[3], d[7], {type: "IMM", value: 0 }]}},
    {"name": "REMAPPED_I_TYPE_OP$subexpression$2", "symbols": [/[nN]/, /[oO]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_I_TYPE_OP", "symbols": ["_", "REMAPPED_I_TYPE_OP$subexpression$2", "__", "REG", "_", "COMMA", "_", "REG", "_"], "postprocess": function(d) {return ["xori",  d[3], d[7], {type: "IMM", value: -1}]}},
    {"name": "REMAPPED_I_TYPE_OP$subexpression$3", "symbols": [/[sS]/, /[eE]/, /[qQ]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_I_TYPE_OP", "symbols": ["_", "REMAPPED_I_TYPE_OP$subexpression$3", "__", "REG", "_", "COMMA", "_", "REG", "_"], "postprocess": function(d) {return ["sltiu", d[3], d[7], {type: "IMM", value: 1 }]}},
    {"name": "REMAPPED_I_TYPE_OP$subexpression$4", "symbols": [/[lL]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_I_TYPE_OP", "symbols": ["_", "REMAPPED_I_TYPE_OP$subexpression$4", "__", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["addi",  d[3], 0, d[7]]}},
    {"name": "REMAPPED_UJ_TYPE_OP$subexpression$1", "symbols": [/[jJ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_UJ_TYPE_OP", "symbols": ["_", "REMAPPED_UJ_TYPE_OP$subexpression$1", "__", "LABEL", "_"], "postprocess": function(d) {return ["jal", 0, d[3]]}},
    {"name": "REMAPPED_UJ_TYPE_OP$subexpression$2", "symbols": [/[jJ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_UJ_TYPE_OP", "symbols": ["_", "REMAPPED_UJ_TYPE_OP$subexpression$2", "__", "IMM", "_"], "postprocess": function(d) {return ["jal", 0, d[3]]}},
    {"name": "REMAPPED_UJ_TYPE_OP$subexpression$3", "symbols": [/[jJ]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_UJ_TYPE_OP", "symbols": ["_", "REMAPPED_UJ_TYPE_OP$subexpression$3", "__", "REG", "_"], "postprocess": function(d) {return ["jalr", 0, d[3], {type: "IMM", value: 0}]}},
    {"name": "REMAPPED_UJ_TYPE_OP$subexpression$4", "symbols": [/[rR]/, /[eE]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_UJ_TYPE_OP", "symbols": ["_", "REMAPPED_UJ_TYPE_OP$subexpression$4", "_"], "postprocess": function(d) {return ["jalr", 0, 1,    {type: "IMM", value: 0}]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$1", "symbols": [/[bB]/, /[eE]/, /[qQ]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$1", "__", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["beq", d[3], 0, d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$2", "symbols": [/[bB]/, /[eE]/, /[qQ]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$2", "__", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["beq", d[3], 0, d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$3", "symbols": [/[bB]/, /[nN]/, /[eE]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$3", "__", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["bne", d[3], 0, d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$4", "symbols": [/[bB]/, /[nN]/, /[eE]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$4", "__", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["bne", d[3], 0, d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$5", "symbols": [/[bB]/, /[lL]/, /[eE]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$5", "__", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["bge", 0, d[3], d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$6", "symbols": [/[bB]/, /[lL]/, /[eE]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$6", "__", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["bge", 0, d[3], d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$7", "symbols": [/[bB]/, /[gG]/, /[eE]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$7", "__", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["bge", d[3], 0, d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$8", "symbols": [/[bB]/, /[gG]/, /[eE]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$8", "__", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["bge", d[3], 0, d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$9", "symbols": [/[bB]/, /[lL]/, /[tT]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$9", "__", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["blt", d[3], 0, d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$10", "symbols": [/[bB]/, /[lL]/, /[tT]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$10", "__", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["blt", d[3], 0, d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$11", "symbols": [/[bB]/, /[gG]/, /[tT]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$11", "__", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["blt", 0, d[3], d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$12", "symbols": [/[bB]/, /[gG]/, /[tT]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$12", "__", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["blt", 0, d[3], d[7]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$13", "symbols": [/[bB]/, /[gG]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$13", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["blt",  d[7], d[3], d[11]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$14", "symbols": [/[bB]/, /[gG]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$14", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["blt",  d[7], d[3], d[11]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$15", "symbols": [/[bB]/, /[lL]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$15", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["bge",  d[7], d[3], d[11]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$16", "symbols": [/[bB]/, /[lL]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$16", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["bge",  d[7], d[3], d[11]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$17", "symbols": [/[bB]/, /[gG]/, /[tT]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$17", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["bltu", d[7], d[3], d[11]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$18", "symbols": [/[bB]/, /[gG]/, /[tT]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$18", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["bltu", d[7], d[3], d[11]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$19", "symbols": [/[bB]/, /[lL]/, /[eE]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$19", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "IMM", "_"], "postprocess": function(d) {return ["bgeu", d[7], d[3], d[11]]}},
    {"name": "REMAPPED_SB_TYPE_OP$subexpression$20", "symbols": [/[bB]/, /[lL]/, /[eE]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REMAPPED_SB_TYPE_OP", "symbols": ["_", "REMAPPED_SB_TYPE_OP$subexpression$20", "__", "REG", "_", "COMMA", "_", "REG", "_", "COMMA", "_", "LABEL", "_"], "postprocess": function(d) {return ["bgeu", d[7], d[3], d[11]]}},
    {"name": "PSEUDO_OP$subexpression$1", "symbols": [/[lL]/, /[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "PSEUDO_OP", "symbols": ["_", "PSEUDO_OP$subexpression$1", "__", "REG", "_", "COMMA", "_", "IMM", "_"]},
    {"name": "PSEUDO_OP$subexpression$2", "symbols": [/[lL]/, /[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "PSEUDO_OP", "symbols": ["_", "PSEUDO_OP$subexpression$2", "__", "REG", "_", "COMMA", "_", "LABEL", "_"]},
    {"name": "PSEUDO_OP$subexpression$3", "symbols": [/[cC]/, /[aA]/, /[lL]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "PSEUDO_OP", "symbols": ["_", "PSEUDO_OP$subexpression$3", "__", "LABEL", "_"]},
    {"name": "COMMENT", "symbols": [{"literal":"#"}, "TEXT"], "postprocess": function(d) {return null;}},
    {"name": "COMMENT", "symbols": [{"literal":";"}, "TEXT"], "postprocess": function(d) {return null;}},
    {"name": "IMM", "symbols": ["NUMBER"], "postprocess": function(d) { return {type: "IMM",   value: flatten(d)[0]}}},
    {"name": "LABEL$ebnf$1", "symbols": []},
    {"name": "LABEL$ebnf$1", "symbols": ["LABEL$ebnf$1", /[._a-zA-Z0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "LABEL", "symbols": [/[._a-zA-Z]/, "LABEL$ebnf$1"], "postprocess": function(d) { return {type: "LABEL", value: d[0] + d[1].join('')}}},
    {"name": "LABEL_COLON", "symbols": ["_", "LABEL", "_", {"literal":":"}, "_"], "postprocess": d => d[1].value},
    {"name": "LO$subexpression$1", "symbols": [{"literal":"%"}, /[lL]/, /[oO]/, {"literal":"("}], "postprocess": function (d) {return d.join(""); }},
    {"name": "LO", "symbols": ["LO$subexpression$1", "_", "LABEL", "_", {"literal":")"}], "postprocess": function(d) { return {type: "LABEL", value: d[2].value}}},
    {"name": "HI$subexpression$1", "symbols": [{"literal":"%"}, /[hH]/, /[iI]/, {"literal":"("}], "postprocess": function (d) {return d.join(""); }},
    {"name": "HI", "symbols": ["HI$subexpression$1", "_", "LABEL", "_", {"literal":")"}], "postprocess": function(d) { return {type: "LABEL", value: d[2].value}}},
    {"name": "R_TYPE$subexpression$1", "symbols": [/[sS]/, /[lL]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$1"]},
    {"name": "R_TYPE$subexpression$2", "symbols": [/[sS]/, /[rR]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$2"]},
    {"name": "R_TYPE$subexpression$3", "symbols": [/[sS]/, /[rR]/, /[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$3"]},
    {"name": "R_TYPE$subexpression$4", "symbols": [/[aA]/, /[dD]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$4"]},
    {"name": "R_TYPE$subexpression$5", "symbols": [/[sS]/, /[uU]/, /[bB]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$5"]},
    {"name": "R_TYPE$subexpression$6", "symbols": [/[xX]/, /[oO]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$6"]},
    {"name": "R_TYPE$subexpression$7", "symbols": [/[oO]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$7"]},
    {"name": "R_TYPE$subexpression$8", "symbols": [/[aA]/, /[nN]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$8"]},
    {"name": "R_TYPE$subexpression$9", "symbols": [/[sS]/, /[lL]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$9"]},
    {"name": "R_TYPE$subexpression$10", "symbols": [/[sS]/, /[lL]/, /[tT]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "R_TYPE", "symbols": ["R_TYPE$subexpression$10"]},
    {"name": "I_TYPE$subexpression$1", "symbols": [/[lL]/, /[bB]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$1"]},
    {"name": "I_TYPE$subexpression$2", "symbols": [/[lL]/, /[hH]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$2"]},
    {"name": "I_TYPE$subexpression$3", "symbols": [/[lL]/, /[wW]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$3"]},
    {"name": "I_TYPE$subexpression$4", "symbols": [/[lL]/, /[bB]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$4"]},
    {"name": "I_TYPE$subexpression$5", "symbols": [/[lL]/, /[hH]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$5"]},
    {"name": "I_TYPE$subexpression$6", "symbols": [/[aA]/, /[dD]/, /[dD]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$6"]},
    {"name": "I_TYPE$subexpression$7", "symbols": [/[xX]/, /[oO]/, /[rR]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$7"]},
    {"name": "I_TYPE$subexpression$8", "symbols": [/[oO]/, /[rR]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$8"]},
    {"name": "I_TYPE$subexpression$9", "symbols": [/[aA]/, /[nN]/, /[dD]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$9"]},
    {"name": "I_TYPE$subexpression$10", "symbols": [/[sS]/, /[lL]/, /[tT]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$10"]},
    {"name": "I_TYPE$subexpression$11", "symbols": [/[sS]/, /[lL]/, /[tT]/, /[iI]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$11"]},
    {"name": "I_TYPE$subexpression$12", "symbols": [/[sS]/, /[lL]/, /[lL]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$12"]},
    {"name": "I_TYPE$subexpression$13", "symbols": [/[sS]/, /[rR]/, /[lL]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$13"]},
    {"name": "I_TYPE$subexpression$14", "symbols": [/[sS]/, /[rR]/, /[aA]/, /[iI]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "I_TYPE", "symbols": ["I_TYPE$subexpression$14"]},
    {"name": "S_TYPE$subexpression$1", "symbols": [/[sS]/, /[bB]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "S_TYPE", "symbols": ["S_TYPE$subexpression$1"]},
    {"name": "S_TYPE$subexpression$2", "symbols": [/[sS]/, /[hH]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "S_TYPE", "symbols": ["S_TYPE$subexpression$2"]},
    {"name": "S_TYPE$subexpression$3", "symbols": [/[sS]/, /[wW]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "S_TYPE", "symbols": ["S_TYPE$subexpression$3"]},
    {"name": "SB_TYPE$subexpression$1", "symbols": [/[bB]/, /[eE]/, /[qQ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SB_TYPE", "symbols": ["SB_TYPE$subexpression$1"]},
    {"name": "SB_TYPE$subexpression$2", "symbols": [/[bB]/, /[nN]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SB_TYPE", "symbols": ["SB_TYPE$subexpression$2"]},
    {"name": "SB_TYPE$subexpression$3", "symbols": [/[bB]/, /[lL]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SB_TYPE", "symbols": ["SB_TYPE$subexpression$3"]},
    {"name": "SB_TYPE$subexpression$4", "symbols": [/[bB]/, /[gG]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SB_TYPE", "symbols": ["SB_TYPE$subexpression$4"]},
    {"name": "SB_TYPE$subexpression$5", "symbols": [/[bB]/, /[lL]/, /[tT]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SB_TYPE", "symbols": ["SB_TYPE$subexpression$5"]},
    {"name": "SB_TYPE$subexpression$6", "symbols": [/[bB]/, /[gG]/, /[eE]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SB_TYPE", "symbols": ["SB_TYPE$subexpression$6"]},
    {"name": "REG$subexpression$1", "symbols": [/[zZ]/, /[eE]/, /[rR]/, /[oO]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$1"], "postprocess": d => 0},
    {"name": "REG$subexpression$2", "symbols": [/[rR]/, /[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$2"], "postprocess": d => 1},
    {"name": "REG$subexpression$3", "symbols": [/[sS]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$3"], "postprocess": d => 2},
    {"name": "REG$subexpression$4", "symbols": [/[gG]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$4"], "postprocess": d => 3},
    {"name": "REG$subexpression$5", "symbols": [/[tT]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$5"], "postprocess": d => 4},
    {"name": "REG$subexpression$6", "symbols": [/[tT]/, {"literal":"0"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$6"], "postprocess": d => 5},
    {"name": "REG$subexpression$7", "symbols": [/[tT]/, {"literal":"1"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$7"], "postprocess": d => 6},
    {"name": "REG$subexpression$8", "symbols": [/[tT]/, {"literal":"2"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$8"], "postprocess": d => 7},
    {"name": "REG$subexpression$9", "symbols": [/[sS]/, {"literal":"0"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$9"], "postprocess": d => 8},
    {"name": "REG$subexpression$10", "symbols": [/[fF]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$10"], "postprocess": d => 8},
    {"name": "REG$subexpression$11", "symbols": [/[sS]/, {"literal":"1"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$11"], "postprocess": d => 9},
    {"name": "REG$subexpression$12", "symbols": [/[aA]/, {"literal":"0"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$12"], "postprocess": d => 10},
    {"name": "REG$subexpression$13", "symbols": [/[aA]/, {"literal":"1"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$13"], "postprocess": d => 11},
    {"name": "REG$subexpression$14", "symbols": [/[aA]/, {"literal":"2"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$14"], "postprocess": d => 12},
    {"name": "REG$subexpression$15", "symbols": [/[aA]/, {"literal":"3"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$15"], "postprocess": d => 13},
    {"name": "REG$subexpression$16", "symbols": [/[aA]/, {"literal":"4"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$16"], "postprocess": d => 14},
    {"name": "REG$subexpression$17", "symbols": [/[aA]/, {"literal":"5"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$17"], "postprocess": d => 15},
    {"name": "REG$subexpression$18", "symbols": [/[aA]/, {"literal":"6"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$18"], "postprocess": d => 16},
    {"name": "REG$subexpression$19", "symbols": [/[aA]/, {"literal":"7"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$19"], "postprocess": d => 17},
    {"name": "REG$subexpression$20", "symbols": [/[sS]/, {"literal":"2"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$20"], "postprocess": d => 18},
    {"name": "REG$subexpression$21", "symbols": [/[sS]/, {"literal":"3"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$21"], "postprocess": d => 19},
    {"name": "REG$subexpression$22", "symbols": [/[sS]/, {"literal":"4"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$22"], "postprocess": d => 20},
    {"name": "REG$subexpression$23", "symbols": [/[sS]/, {"literal":"5"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$23"], "postprocess": d => 21},
    {"name": "REG$subexpression$24", "symbols": [/[sS]/, {"literal":"6"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$24"], "postprocess": d => 22},
    {"name": "REG$subexpression$25", "symbols": [/[sS]/, {"literal":"7"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$25"], "postprocess": d => 23},
    {"name": "REG$subexpression$26", "symbols": [/[sS]/, {"literal":"8"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$26"], "postprocess": d => 24},
    {"name": "REG$subexpression$27", "symbols": [/[sS]/, {"literal":"9"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$27"], "postprocess": d => 25},
    {"name": "REG$subexpression$28", "symbols": [/[sS]/, {"literal":"1"}, {"literal":"0"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$28"], "postprocess": d => 26},
    {"name": "REG$subexpression$29", "symbols": [/[sS]/, {"literal":"1"}, {"literal":"1"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$29"], "postprocess": d => 27},
    {"name": "REG$subexpression$30", "symbols": [/[tT]/, {"literal":"3"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$30"], "postprocess": d => 28},
    {"name": "REG$subexpression$31", "symbols": [/[tT]/, {"literal":"4"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$31"], "postprocess": d => 29},
    {"name": "REG$subexpression$32", "symbols": [/[tT]/, {"literal":"5"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$32"], "postprocess": d => 30},
    {"name": "REG$subexpression$33", "symbols": [/[tT]/, {"literal":"6"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "REG", "symbols": ["REG$subexpression$33"], "postprocess": d => 31},
    {"name": "DIRECTIVE", "symbols": ["DATA_EMITTING_DIRECTIVE"], "postprocess": function(d) { return {type: "DIRECTIVE", subtype: "DATA_EMIT", symbols: flatten(d)}; }},
    {"name": "DIRECTIVE", "symbols": ["ALIGNMENT_DIRECTIVE"], "postprocess": function(d) { return {type: "DIRECTIVE",                       symbols: flatten(d)}; }},
    {"name": "DIRECTIVE", "symbols": ["SYMBOL_DIRECTIVE"], "postprocess": function(d) { return {type: "DIRECTIVE",                       symbols: flatten(d)}; }},
    {"name": "DIRECTIVE", "symbols": ["SECTION_DIRECTIVE"], "postprocess": function(d) { return {type: "DIRECTIVE", subtype: "SECTION",   symbols: flatten(d)}; }},
    {"name": "DIRECTIVE", "symbols": ["OTHER_DIRECTIVE"], "postprocess": function(d) { return {type: "DIRECTIVE",                       symbols: flatten(d)}; }},
    {"name": "DATA_EMITTING_DIRECTIVE", "symbols": ["_", "DATA_NAME", "__", "NUMBER", "_"], "postprocess": function(d) {return [d[1], d[3]]}},
    {"name": "DATA_EMITTING_DIRECTIVE", "symbols": ["_", "STRING_NAME", "__", {"literal":"\""}, "TEXT", {"literal":"\""}, "_"], "postprocess": function(d) {return [d[1], d[4]]}},
    {"name": "ALIGNMENT_DIRECTIVE", "symbols": ["_", "ALIGNMENT_NAME", "_"], "postprocess": function(d) {return d[1]}},
    {"name": "ALIGNMENT_DIRECTIVE", "symbols": ["_", "ALIGNMENT_NAME", "__", "TEXT"], "postprocess": function(d) {return d[1]}},
    {"name": "SYMBOL_DIRECTIVE", "symbols": ["_", "SYMBOL_NAME", "__", "TEXT"], "postprocess": function(d) {return d[1]}},
    {"name": "SECTION_DIRECTIVE", "symbols": ["_", "SECTION_NAME", "_"], "postprocess": function(d) {return d[1]}},
    {"name": "SECTION_DIRECTIVE$subexpression$1", "symbols": [{"literal":"."}, /[sS]/, /[eE]/, /[cC]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SECTION_DIRECTIVE", "symbols": ["_", "SECTION_DIRECTIVE$subexpression$1", "__", "SECTION_NAME", "_"], "postprocess": function(d) {return d[3]}},
    {"name": "SECTION_DIRECTIVE$subexpression$2", "symbols": [{"literal":"."}, /[sS]/, /[eE]/, /[cC]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SECTION_DIRECTIVE", "symbols": ["_", "SECTION_DIRECTIVE$subexpression$2", "__", "SECTION_NAME", "_", "TEXT"], "postprocess": function(d) {return d[3]}},
    {"name": "OTHER_DIRECTIVE", "symbols": ["_", "OTHER_NAME", "wschar", "TEXT"], "postprocess": function(d) {return d[1]}},
    {"name": "ALIGNMENT_NAME$subexpression$1", "symbols": [{"literal":"."}, /[aA]/, /[lL]/, /[iI]/, /[gG]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ALIGNMENT_NAME", "symbols": ["ALIGNMENT_NAME$subexpression$1"]},
    {"name": "ALIGNMENT_NAME$subexpression$2", "symbols": [{"literal":"."}, /[bB]/, /[aA]/, /[lL]/, /[iI]/, /[gG]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ALIGNMENT_NAME", "symbols": ["ALIGNMENT_NAME$subexpression$2"]},
    {"name": "ALIGNMENT_NAME$subexpression$3", "symbols": [{"literal":"."}, /[pP]/, {"literal":"2"}, /[aA]/, /[lL]/, /[iI]/, /[gG]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ALIGNMENT_NAME", "symbols": ["ALIGNMENT_NAME$subexpression$3"]},
    {"name": "SECTION_NAME$subexpression$1", "symbols": [{"literal":"."}, /[tT]/, /[eE]/, /[xX]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SECTION_NAME", "symbols": ["SECTION_NAME$subexpression$1"]},
    {"name": "SECTION_NAME$subexpression$2", "symbols": [{"literal":"."}, /[dD]/, /[aA]/, /[tT]/, /[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SECTION_NAME", "symbols": ["SECTION_NAME$subexpression$2"]},
    {"name": "SECTION_NAME$subexpression$3", "symbols": [{"literal":"."}, /[rR]/, /[oO]/, /[dD]/, /[aA]/, /[tT]/, /[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SECTION_NAME", "symbols": ["SECTION_NAME$subexpression$3"]},
    {"name": "SECTION_NAME$subexpression$4", "symbols": [{"literal":"."}, /[bB]/, /[sS]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SECTION_NAME", "symbols": ["SECTION_NAME$subexpression$4"]},
    {"name": "SECTION_NAME$subexpression$5", "symbols": [{"literal":"."}, /[sS]/, /[dD]/, /[aA]/, /[tT]/, /[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SECTION_NAME", "symbols": ["SECTION_NAME$subexpression$5"]},
    {"name": "DATA_NAME$subexpression$1", "symbols": [{"literal":"."}, {"literal":"2"}, /[bB]/, /[yY]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$1"]},
    {"name": "DATA_NAME$subexpression$2", "symbols": [{"literal":"."}, {"literal":"4"}, /[bB]/, /[yY]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$2"]},
    {"name": "DATA_NAME$subexpression$3", "symbols": [{"literal":"."}, {"literal":"8"}, /[bB]/, /[yY]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$3"]},
    {"name": "DATA_NAME$subexpression$4", "symbols": [{"literal":"."}, /[hH]/, /[aA]/, /[lL]/, /[fF]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$4"]},
    {"name": "DATA_NAME$subexpression$5", "symbols": [{"literal":"."}, /[wW]/, /[oO]/, /[rR]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$5"]},
    {"name": "DATA_NAME$subexpression$6", "symbols": [{"literal":"."}, /[dD]/, /[wW]/, /[oO]/, /[rR]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$6"]},
    {"name": "DATA_NAME$subexpression$7", "symbols": [{"literal":"."}, /[bB]/, /[yY]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$7"]},
    {"name": "DATA_NAME$subexpression$8", "symbols": [{"literal":"."}, /[dD]/, /[tT]/, /[pP]/, /[rR]/, /[eE]/, /[lL]/, /[dD]/, /[wW]/, /[oO]/, /[rR]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$8"]},
    {"name": "DATA_NAME$subexpression$9", "symbols": [{"literal":"."}, /[dD]/, /[tT]/, /[pP]/, /[rR]/, /[eE]/, /[lL]/, /[wW]/, /[oO]/, /[rR]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$subexpression$9"]},
    {"name": "DATA_NAME$string$1", "symbols": [{"literal":"."}, {"literal":"z"}, {"literal":"e"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DATA_NAME", "symbols": ["DATA_NAME$string$1"]},
    {"name": "STRING_NAME$subexpression$1", "symbols": [{"literal":"."}, /[aA]/, /[sS]/, /[cC]/, /[iI]/, /[zZ]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "STRING_NAME", "symbols": ["STRING_NAME$subexpression$1"]},
    {"name": "STRING_NAME$subexpression$2", "symbols": [{"literal":"."}, /[sS]/, /[tT]/, /[rR]/, /[iI]/, /[nN]/, /[gG]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "STRING_NAME", "symbols": ["STRING_NAME$subexpression$2"]},
    {"name": "SYMBOL_NAME$subexpression$1", "symbols": [{"literal":"."}, /[gG]/, /[lL]/, /[oO]/, /[bB]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SYMBOL_NAME", "symbols": ["SYMBOL_NAME$subexpression$1"]},
    {"name": "SYMBOL_NAME$subexpression$2", "symbols": [{"literal":"."}, /[lL]/, /[oO]/, /[cC]/, /[aA]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SYMBOL_NAME", "symbols": ["SYMBOL_NAME$subexpression$2"]},
    {"name": "SYMBOL_NAME$subexpression$3", "symbols": [{"literal":"."}, /[eE]/, /[qQ]/, /[uU]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SYMBOL_NAME", "symbols": ["SYMBOL_NAME$subexpression$3"]},
    {"name": "OTHER_NAME$subexpression$1", "symbols": [{"literal":"."}, /[oO]/, /[pP]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OTHER_NAME", "symbols": ["OTHER_NAME$subexpression$1"]},
    {"name": "OTHER_NAME$subexpression$2", "symbols": [{"literal":"."}, /[mM]/, /[aA]/, /[cC]/, /[rR]/, /[oO]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OTHER_NAME", "symbols": ["OTHER_NAME$subexpression$2"]},
    {"name": "OTHER_NAME$subexpression$3", "symbols": [{"literal":"."}, /[fF]/, /[iI]/, /[lL]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OTHER_NAME", "symbols": ["OTHER_NAME$subexpression$3"]},
    {"name": "OTHER_NAME$subexpression$4", "symbols": [{"literal":"."}, /[iI]/, /[dD]/, /[eE]/, /[nN]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OTHER_NAME", "symbols": ["OTHER_NAME$subexpression$4"]},
    {"name": "OTHER_NAME$subexpression$5", "symbols": [{"literal":"."}, /[sS]/, /[iI]/, /[zZ]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OTHER_NAME", "symbols": ["OTHER_NAME$subexpression$5"]},
    {"name": "OTHER_NAME$subexpression$6", "symbols": [{"literal":"."}, /[tT]/, /[yY]/, /[pP]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OTHER_NAME", "symbols": ["OTHER_NAME$subexpression$6"]},
    {"name": "RPAREN", "symbols": [{"literal":")"}]},
    {"name": "LPAREN", "symbols": [{"literal":"("}]},
    {"name": "TEXT$ebnf$1", "symbols": []},
    {"name": "TEXT$ebnf$1", "symbols": ["TEXT$ebnf$1", /[!:@\\'\\"()\-+=@#$%^&*(){}\[\]\\,\.\ \\t._a-zA-Z0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "TEXT", "symbols": ["TEXT$ebnf$1"], "postprocess": function(d) {return null; }},
    {"name": "NUMBER", "symbols": ["DECIMAL"]},
    {"name": "NUMBER", "symbols": ["HEX"]},
    {"name": "HEX$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "HEX$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "HEX$string$1", "symbols": [{"literal":"0"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HEX$ebnf$2", "symbols": [/[0-9a-fA-F]/]},
    {"name": "HEX$ebnf$2", "symbols": ["HEX$ebnf$2", /[0-9a-fA-F]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "HEX", "symbols": ["HEX$ebnf$1", "HEX$string$1", "HEX$ebnf$2"], "postprocess":  function(d) {if (d[0] !== null) return parseInt(d[0] + d[2].join(""), 16)
        else               return parseInt(       d[2].join(""), 16) } },
    {"name": "DECIMAL$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "DECIMAL$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "DECIMAL$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "DECIMAL$ebnf$2", "symbols": ["DECIMAL$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "DECIMAL", "symbols": ["DECIMAL$ebnf$1", "DECIMAL$ebnf$2"], "postprocess":  function(d) {if (d[0] !== null) return parseInt(d[0] + d[1].join(""))
        else               return parseInt(       d[1].join("")) } },
    {"name": "COMMA", "symbols": [{"literal":","}], "postprocess": function(d) {return null;}},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t]/], "postprocess": function(d) {return null;}}
]
  , ParserStart: "LINE"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();

},{}],5:[function(require,module,exports){
var kernel    = require("./kernel.js");
var breakdown = require("./breakdown.js");
var emul      = require("./emulator.js");
var parser    = require("./parser.js");
const templates = require("./html_templates.js");

exports.stack_base = 16;

// private gui decorations
var decorations = [];

// console string buffer
var console_output = "";

// debugger button callbacks
var run_btn_callback = null;
var step_btn_callback = null;
var reset_btn_callback = null;

// debugger button title strings
const run_button_title = "Run until completion or breakpoint";
const reset_button_title = "Restart simulator state, but keep code";
const single_step_button_title = "Step over a single instruction";
const error_title = "Simulation disabled because errors were found";

function warn(warning_text) {
    console.log(warning_text);
    alert(warning_text);
}

function set_debugger_btn_callbacks(run_cb, step_cb, reset_cb) {
    run_btn_callback = run_cb;
    step_btn_callback = step_cb;
    reset_btn_callback = reset_cb;
}

function print_to_console(str) {
    var console = document.getElementById("console");
    if (console != null) {
        console_output += str.replace("\n", "<br>");
        console.innerHTML = console_output;
        console.scrollTop = console.scrollHeight;
    }
}

function clear_console() {
    var console = document.getElementById("console");
    if (console != null) {
        console.innerHTML = "";
        console_output = "";
    }
}

function print_parser_result() {
    parser.print_result(emul.instructions);
}

function update_debugger_buttons() {
    var run_button = document.getElementById("run");
    var step_button = document.getElementById("step");
    var reset_button = document.getElementById("restart");
    if (run_button === null || step_button === null 
        || reset_button === null) {
        // shouldn't happen
        return;
    }
    if (parser.get_error_count() > 0) {
        run_button.className = "btn btn_disabled";
        step_button.className = "btn btn_disabled";
        reset_button.className = "btn btn_disabled";
        run_button.removeEventListener('click',  run_btn_callback);
        step_button.removeEventListener('click',  step_btn_callback);
        reset_button.removeEventListener('click',  reset_btn_callback);
        run_button.title = error_title;
        step_button.title = error_title;
        reset_button.title = error_title;
    } else {
        run_button.className = "btn";
        step_button.className = "btn";
        reset_button.className = "btn";
        run_button.addEventListener('click',  run_btn_callback);
        step_button.addEventListener('click',  step_btn_callback);
        reset_button.addEventListener('click',  reset_btn_callback);
        run_button.title = run_button_title;
        reset_button.title = reset_button_title;
        step_button.title = single_step_button_title;
    }
}

function refresh_ip() {
    // IP decoration
    var line = emul.IP + 1; // +1 since the editor index is 1-based
    if (isNaN(line))
        line = 1;
    
    var frontend_lines = kernel.frontend.trim().split(/\r?\n/).length;
    var backend_lines  = kernel.backend.trim().split(/\r?\n/).length;
    var user_lines     = emul.original_asm.split(/\r?\n/).length - frontend_lines - backend_lines;

    // Breakpoint decorations
    var bp_dec = [];
    for (var i = 0; i < emul.breakpoints.length; i++) {
        var bp = emul.breakpoints[i] + 1;
        bp_dec.push({ range: new monaco.Range(bp, 0, bp, 100), options: { isWholeLine: true, zIndex: 50, className: 'breakpoint' } });
    }

    //decorations = window.editor.deltaDecorations(decorations, [{ range: new monaco.Range(1, 1, 1, 1), options: {} }]);
    var code_dec = [] 
    // TODO need to also check for EOF 
    if (emul.instructions.length > 0) 
        // TODO remove IP from kernel 
        code_dec =  [
            { range: new monaco.Range(1, 0, frontend_lines, 2), options: { isWholeLine: true, className: 'kernel' } },
            { range: new monaco.Range(frontend_lines + user_lines, 1, frontend_lines + user_lines + backend_lines - 1, 2), options: { isWholeLine: true, className: 'kernel' } },
            { range: new monaco.Range(line, 0, line, 100), options: { isWholeLine: true, zIndex: 100, className: 'ip', inlineClassName: 'ip' } },
        ];
        
    var all_dec = code_dec.concat(bp_dec);
    decorations = window.editor.deltaDecorations(decorations, all_dec);
}

function refresh_regfile() {
    var table = document.getElementById("regfile");

    if (table === null) {
        return; // pane is closed
    }

    // remove colors
    for (var i = 0; i < 32; i++) {
        var row = Math.floor(i / 2) + 1; // plus 1 for the table header
        var col = (i % 2) * 2 + 1; // want col 0 -> col 1 & col 1 -> col 3
        table.rows[row].cells[col].classList.remove("changed_reg");
    }
    ;
    for (var i = 0; i < 32; i++) {
        var row = Math.floor(i / 2) + 1; // plus 1 for the table header
        var col = (i % 2) * 2 + 1; // want col 0 -> col 1 & col 1 -> col 3
        // Color on change
        if (table.rows[row].cells[col].innerHTML != emul.regfile[i])
            table.rows[row].cells[col].classList.add("changed_reg");
        // Update values
        table.rows[row].cells[col].innerHTML = emul.regfile[i];
    }
}

function format_word(value) {
    // Takes a 4-byte word, and returns a string of 4 bytes represented in
    // either hexadecimal, decimal, or binary. The bytes are padded to 2, 3 or 8 
    // characters, respectively
    
    if (isNaN(value))
        return "Pseudo-instr.";

    var byte0 = emul.get_byte(value, 0);
    var byte1 = emul.get_byte(value, 1);
    var byte2 = emul.get_byte(value, 2);
    var byte3 = emul.get_byte(value, 3);

    // We start with the highest byte becase RISC-V is little endian
    var memory_line = byte_to_string(byte3, exports.stack_base) + " " 
                    + byte_to_string(byte2, exports.stack_base) + " " 
                    + byte_to_string(byte1, exports.stack_base) + " "  
                    + byte_to_string(byte0, exports.stack_base) + " ";

    return memory_line
}

function byte_to_string(value, base) {
    // Converts a byte value to a string with the specified base, and pads the value
    
    var default_padding_length = {16: 2, 10: 3, 2: 8};
    var value_string = value.toString(base);
    var padding_length = default_padding_length[base] - value_string.length;
    value_string = "00000000".slice(0, padding_length) + value_string;
    return value_string;
}

function create_stack_lines(memory) {
    var data = [];
    var line_numbers = [];
    
    // First create the lines and numbers
    for (addr=0; addr<=emul.memory_ranges.stack_start-1; addr+=4) {
        var value = emul.read_word(addr);
        var line = format_word(value);
          
        // Possibly add a comment
        if (emul.memory[addr].comment != undefined && emul.memory[addr].comment != "")
            line += "\t//" + emul.memory[addr].comment;

        data.push(line + "\n");         
        line_numbers.push("0x" + addr.toString(16).padStart(8, "0") + ": ");
    }

    // Add the segment names 
    data.splice(emul.memory_ranges.text_end    / 4 + 0, 0, "TEXT SEGMENT\n");
    data.splice(emul.memory_ranges.data_end    / 4 + 1, 0, "DATA SEGMENT\n");
    data.splice(emul.memory_ranges.heap_end    / 4 + 2, 0, "HEAP SEGMENT\n");
    data.splice(emul.memory_ranges.stack_end   / 4 + 3, 0, "FREE SPACE\n");
    data.push  (                                           "STACK SEGMENT\n");

    line_numbers.splice(emul.memory_ranges.text_end    / 4 + 0, 0, "");
    line_numbers.splice(emul.memory_ranges.data_end    / 4 + 1, 0, "");
    line_numbers.splice(emul.memory_ranges.heap_end    / 4 + 2, 0, "");
    line_numbers.splice(emul.memory_ranges.stack_end   / 4 + 3, 0, "");
    line_numbers.push  (                                           "");

    // the memory should be presented bottom up
    data = data.reverse();
    line_numbers = line_numbers.reverse();

    return {data, line_numbers};
}

/**
 * Colors code, data, heap, stack, and free sections with different background colors.
 * Creates a list of dictionaries with start and end lines, and a CSS class.
 */
function create_decoration_ranges() {
    var mr = emul.memory_ranges;

    // Important: the ranges are 1-indexed!
    var ranges = [                                      
        {start: (emul.STACK_ORIGIN - mr.stack_start) / 4 + 1, end: (emul.STACK_ORIGIN - mr.stack_end ) / 4 + 1, class: "stackSegment"},
        {start: (emul.STACK_ORIGIN - mr.stack_end  ) / 4 + 2, end: (emul.STACK_ORIGIN - mr.heap_end  ) / 4 + 2, class: "freeSegment"},
        {start: (emul.STACK_ORIGIN - mr.heap_end   ) / 4 + 3, end: (emul.STACK_ORIGIN - mr.heap_start) / 4 + 3, class: "heapSegment"},
        {start: (emul.STACK_ORIGIN - mr.data_end   ) / 4 + 4, end: (emul.STACK_ORIGIN - mr.data_start) / 4 + 4, class: "dataSegment"},
        {start: (emul.STACK_ORIGIN - mr.text_end   ) / 4 + 5, end: (emul.STACK_ORIGIN - mr.text_start) / 4 + 5, class: "textSegment"}
    ];

    var decorations = [];
    for (var i=0; i<ranges.length; i++)
        decorations.push({range: new monaco.Range(ranges[i].start, 0, ranges[i].end, 100), 
                          options: {isWholeLine: true, className: ranges[i].class}
                         }
        );

    return decorations;
}

/**
 * Sets folding ranges for the code, data, heap, stack, and free sections.
 * Creates a list of dictionaries with start and end lines, and a monaco editor folding range type.
 */
function create_folding_ranges() {
    var mr = emul.memory_ranges;

    // Important: the ranges are 1-indexed!
    var ranges = [
        {start: (emul.STACK_ORIGIN - mr.stack_start) / 4 + 1, end: (emul.STACK_ORIGIN - mr.stack_end ) / 4 + 1, kind: monaco.languages.FoldingRangeKind.Region},
        {start: (emul.STACK_ORIGIN - mr.stack_end  ) / 4 + 2, end: (emul.STACK_ORIGIN - mr.heap_end  ) / 4 + 2, kind: monaco.languages.FoldingRangeKind.Region},
        {start: (emul.STACK_ORIGIN - mr.heap_end   ) / 4 + 3, end: (emul.STACK_ORIGIN - mr.heap_start) / 4 + 3, kind: monaco.languages.FoldingRangeKind.Region},
        {start: (emul.STACK_ORIGIN - mr.data_end   ) / 4 + 4, end: (emul.STACK_ORIGIN - mr.data_start) / 4 + 4, kind: monaco.languages.FoldingRangeKind.Region},
        {start: (emul.STACK_ORIGIN - mr.text_end   ) / 4 + 5, end: (emul.STACK_ORIGIN - mr.text_start) / 4 + 5, kind: monaco.languages.FoldingRangeKind.Region}
    ];

    return ranges;
}

function setup_stack() {
    var memory = emul.memory; 
    
    if (parser.get_error_count() > 0)
        return;

    var {data, line_numbers} = create_stack_lines(memory);
    data = data.join("");

    monaco.languages.register({id: "memory"});
    
    // remove the old editor
    var ed = document.getElementById("stack");
    while (ed.firstChild)
        ed.removeChild(ed.firstChild);

    // create the new editor
    window.stack = monaco.editor.create(document.getElementById("stack"), {
        value: data,
        language: "memory",
        readOnly: true,
        automaticLayout: true,
        minimap: { enabled: false },
        lineNumbers: function (original) {
            // for some reason, original starts from 1 
            return line_numbers[original - 1];
        },
        //scrollbar: {
            //useShadows: false,
            //verticalHasArrows: true,
            //horizontalHasArrows: true,
            //vertical: 'hidden',
        //horizontal: 'hidden',
        //verticalScrollbarSize: 0,
            //horizontalScrollbarSize: 0,
            //arrowSize: 0
        //}
    });

    // Setup colors 
    var decorations = stack.deltaDecorations([], create_decoration_ranges());

    // Setup folding
    monaco.languages.registerFoldingRangeProvider("memory", {
        provideFoldingRanges: function(model, context, token) { return create_folding_ranges() }
    }); 

}

function update_stack() {


}

function refresh_breakdown(instruction) {
    var table = document.getElementById("instruction");
    var ins_bd = breakdown.breakdown(instruction);
    // Delete everything
    while (table.rows.length > 0)
        table.deleteRow(0);
    // Create the rows
    var top = table.insertRow(0);
    var middle = table.insertRow(1);
    var bottom = table.insertRow(2);
    // Create the cells
    for (var i = 0; i < ins_bd.headers.length; i++) {
        top.insertCell();
        middle.insertCell();
        bottom.insertCell();
    }
    // Fill with data
    for (var i = 0; i < ins_bd.headers.length; i++) {
        middle.cells[i].innerHTML = ins_bd.headers[i];
        bottom.cells[i].innerHTML = ins_bd.values[i];
    }
    for (var i = 0; i < ins_bd.bitrange.length; i = i + 2) {
        var left = ins_bd.bitrange[i];
        var right = ins_bd.bitrange[i + 1];
        top.cells[i / 2].innerHTML = "<span style='float:left;'>" + left + "</span><span style='float:right;'>" + right + "</span>";
    };
}

function createEditor(code, line_numbers) {
    // For some ungodly reason, using the examples creates a new monaco-editor.
    $('#editor div').remove();

    window.editor = monaco.editor.create(document.getElementById('editor'), {
        value: code,
        language: 'plaintext',
        readOnly: true,
        automaticLayout: false,
        scrollbar: {
            useShadows: false,
            vertical: 'visible',
            horizontal: 'visible',
            verticalHasArrows: false,
            horizontalHasArrows: false,
        },
        minimap: {
            enabled: false
        },
        lineNumbers: function (original) {
            // for some reason, original starts from 1 
            return line_numbers[original - 1];
        },
    });

    editor.addAction({
        id: 'breakpoint-add',
        label: 'Add breakpoint',
        keybindings: [
            monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_B)
        ],
        precondition: null,
        keybindingContext: null,
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        run: function (ed) {
            createBreakpoint(ed);
        }
    });

    editor.addAction({
        id: 'breakpoint-delete',
        label: 'Delete breakpoint',
        keybindings: [
            monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D)
        ],
        precondition: null,
        keybindingContext: null,
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        run: function (ed) {
            deleteBreakpoint(ed);
        }
    });
}

function resetEditor() {
    var ed = document.getElementById("editor");
    while (ed.firstChild)
        ed.removeChild(ed.firstChild);
}

function createBreakpoint(ed) {
    // The editor lines are offset by 1, so remove it 
    var location = ed.getPosition().lineNumber - 1;
    // delete previous appearances, just in case
    emul.breakpoints = emul.breakpoints.filter(function (item) { return item != location; });
    // add the new breakpoint
    emul.breakpoints.push(location);
    refresh_ip();
}

function deleteBreakpoint(ed) {
    // The editor lines are offset by 1, so remove it 
    var location = ed.getPosition().lineNumber - 1;
    emul.breakpoints = emul.breakpoints.filter(function (item) { return item != location; });
    refresh_ip();
}

function scrollToLine(line) {
    window.editor.revealLineInCenter(line);
}

function setupGoldenLayout(left_pane_callback, middle_pane_callback, right_pane_middle_callback, useCompiler) {
    var configWithCompiler = {
        settings: {
            showPopoutIcon: false,
            showMaximiseIcon: false,
            showCloseIcon: false,
            isCloseable: false
        },
        dimensions: {
            minItemWidth: 200
        },
        content: [{
            type: 'row',
            content: [{
                type: 'column',
                width: 75,
                content: [{
                    type: 'row',
                    content: [{
                        type: 'component',
                        componentName: 'left_pane',
                        componentState: {
                            label: 'A'
                        },
                        title: "C source",
                        width: 35
                            }, {
                        type: 'component',
                        componentName: 'middle_pane',
                        componentState: {},
                        title: "RISC-V Assembly",
                        width: 32,
                        height: 65,
                              }]
                        }, {
                    type: 'row',
                    height: 20,
                    content: [{
                        type: 'component',
                        componentName: 'console_pane',
                        componentState: {},
                        title: "Console",
                        width: 100,
                        height: 20
                            }]
                        }]
                   }, {
                type: 'column',
                content: [{
                    type: 'stack',
                    content: [{
                            type: 'component',
                            width: 20,
                            componentName: 'right_pane_top',
                            componentState: {},
                            title: "Registers"
                                    },
                        {
                            type: 'component',
                            width: 20,
                            componentName: 'right_pane_middle',
                            componentState: {},
                            title: "Memory"
                                    }]
                               }, {
                    type: 'component',
                    componentName: 'right_pane_bottom',
                    componentState: {},
                    title: "Instruction breakdown",
                    height: 20,
                            }]
                       }]
                }]
    };

    var configWithoutCompiler = {
        settings: {
            showPopoutIcon: false,
            showMaximiseIcon: false,
            showCloseIcon: false,
            isCloseable: false
        },
        dimensions: {
            minItemWidth: 200
        },
        content: [{
            type: 'row',
            content: [{
                type: 'column',
                width: 50,
                content: [{
                    type: 'row',
                    content: [{
                        type: 'component',
                        componentName: 'middle_pane',
                        componentState: {},
                        title: "RISC-V Assembly",
                        width: 32,
                        height: 65,
                    }]
                }, {
                    type: 'row',
                    height: 20,
                    content: [{
                        type: 'component',
                        componentName: 'console_pane',
                        componentState: {},
                        title: "Console",
                        width: 100,
                        height: 20
                    }]
                }]
            }, {
                type: 'column',
                content: [{
                    type: 'row',
                    content: [{
                        type: 'component',
                        width: 20,
                        componentName: 'right_pane_top',
                        componentState: {},
                        title: "Registers"
                    },
                        {
                            type: 'component',
                            width: 20,
                            componentName: 'right_pane_middle',
                            componentState: {},
                            title: "Memory"
                        }]
                }, {
                    type: 'component',
                    componentName: 'right_pane_bottom',
                    componentState: {},
                    title: "Instruction breakdown",
                    height: 20,
                }]
            }]
        }]
    };
    //var myLayout = new GoldenLayout(config, $("gl_wrapper"));
    if (useCompiler)
        var myLayout = new GoldenLayout(configWithCompiler, "#gl_wrapper");
    else
        var myLayout = new GoldenLayout(configWithoutCompiler, "#gl_wrapper");
    //myLayout.container = "#gl_wrapper";
    //myLayout._isFullPage = true;

    if (useCompiler)
        myLayout.registerComponent( 'left_pane', function( container, state ){
            //container.getElement().load("../templates/source.html", left_pane_callback);
            container.getElement().html(templates.source);
        });

    myLayout.registerComponent( 'middle_pane', function( container, state ){
        //container.getElement().load("../templates/assembly.html", middle_pane_callback);
        container.getElement().html(templates.assembly);
    });

    myLayout.registerComponent( 'right_pane_top', function( container, state ){
        container.getElement().html(templates.registers);
        /*container.getElement().load('../templates/registers.html', function() {
            // Add scroll bars to the regfile
            $("#regfile").parent().css("overflow", "auto");
        });*/
    });

    myLayout.registerComponent( 'right_pane_middle', function( container, state ){
        //container.getElement().load('../templates/memory.html', right_pane_middle_callback);
        container.getElement().html(templates.memory);
    });

    myLayout.registerComponent( 'right_pane_bottom', function( container, state ){
        container.getElement().html(templates.breakdown);
        /*container.getElement().load('../templates/breakdown.html', function() {
            // Add scroll bars to the instruction breakdown
            $("#instruction").parent().css("overflow", "auto");
        });*/
    });

    myLayout.registerComponent('console_pane', function(container, state){
        container.getElement().html(templates.console);
    });

    // Catch resize events
    myLayout.on('componentCreated', function(component) {
        component.container.on('resize', function() {
            // If the source pane is resized
            if (component.componentName == "left_pane") {
                window.source_editor.layout();
            }
            // If the assembly pane is resized
            if (component.componentName == "middle_pane") {
                window.editor.layout();
            }
        });
        // invoke callback procedures after components created
        if (component.componentName == "left_pane") {
            left_pane_callback();
        } else if (component.componentName == "middle_pane") {
            middle_pane_callback();
        } else if (component.componentName == "right_pane_top") {
            $("#regfile").parent().css("overflow", "auto");
        } else if (component.componentName == "right_pane_middle") {
            right_pane_middle_callback();
        } else if (component.componentName == "right_pane_bottom") {
            $("#instruction").parent().css("overflow", "auto");
        }
    });
    
    window.addEventListener('resize', function(event){
        // hacky but seems to work
        var glWrapper = document.getElementById('gl_wrapper');
        myLayout.updateSize($(glWrapper).width(), $(glWrapper).height());
    });

    myLayout.init();

    // Delete all close buttons from the golden-layout tabs 
    $(".lm_close_tab").remove();
    // Fix the right padding, as it used to include the exit button 
    $(".lm_tab").css("padding-right", 10);

}

exports.refresh_ip        = refresh_ip;
exports.refresh_regfile   = refresh_regfile;  
exports.setup_stack       = setup_stack;    
exports.refresh_breakdown = refresh_breakdown;
exports.createEditor      = createEditor;     
exports.resetEditor       = resetEditor;     
exports.createBreakpoint  = createBreakpoint; 
exports.deleteBreakpoint  = deleteBreakpoint; 
exports.scrollToLine      = scrollToLine;     
exports.update_stack      = update_stack;
exports.setupGoldenLayout = setupGoldenLayout;
exports.update_debug_btns = update_debugger_buttons
exports.set_debug_btns_cb = set_debugger_btn_callbacks
exports.clear_console     = clear_console;
exports.print_to_console  = print_to_console;
exports.print_parser_result  = print_parser_result

},{"./breakdown.js":2,"./emulator.js":3,"./html_templates.js":6,"./kernel.js":7,"./parser.js":9}],6:[function(require,module,exports){
const assembly_template = `
<div class="btn-group" title="Load an assembly (*.s) file ">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-upload fa-lg"></i>
    </button>
    <div class="dropdown-menu">
        <label id="upload" class="dropdown-item">
            Load an assembly (*.s) file
            <input id="upload_input" type="file" style="display: none;">
        </label>
        <div class="dropdown-divider"></div>
        <h5 class="dropdown-header">Example assembly files:</h5>
        <a id="gcd_example"       class="dropdown-item" href="#">Greatest common divisor</a>
        <a id="binsearch_example" class="dropdown-item" href="#">Binary search</a>
        <a id="syscall_example" class="dropdown-item" href="#">System calls</a>
    </div>
</div>

<button id="run"     class="btn btn_disabled" title="Please load a program!"><i class="fa fa-play fa-lg"></i> </button>
<button id="step"    class="btn btn_disabled" title="Please load a program!"><i class="fa fa-step-forward fa-lg"></i> </button>
<button id="restart" class="btn btn_disabled" title="Please load a program!"><i class="fa fa-fast-backward fa-lg"></i> </button>
<div id="editor" style="border:1px solid grey"></div>

<script>
    require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
    require(['vs/editor/editor.main'], function() {
        window.editor = monaco.editor.create(document.getElementById('editor'), {
            value: [
            ].join('\\n'),
            automaticLayout: false,
            language: 'plaintext',
            scrollbar: {
                useShadows: false,
                verticalHasArrows: false,
                horizontalHasArrows: false,
                vertical: 'auto',
                horizontal: 'auto'
            },
            minimap: {
                enabled: false
            }
        });
    });
</script>
`;

const registers_template = `
<table id="regfile" class="registers table table-condensed table-hover table-bordered table-striped">
    <tr> 
        <th> Register </th>
        <th> Value    </th>
        <th> Register </th>
        <th> Value    </th>
    </tr> 
    <tr> <td> zero  <span style="float:right">[0] </span></td> <td align="center"> 0</td>
         <td> ra    <span style="float:right">[1] </span></td> <td align="center"> 0</td></tr>
    <tr> <td> sp    <span style="float:right">[2] </span></td> <td align="center"> 0</td>
         <td> gp    <span style="float:right">[3] </span></td> <td align="center"> 0</td></tr>
    <tr> <td> tp    <span style="float:right">[4] </span></td> <td align="center"> 0</td>
         <td> t0    <span style="float:right">[5] </span></td> <td align="center"> 0</td></tr>
    <tr> <td> t1    <span style="float:right">[6] </span></td> <td align="center"> 0</td>
         <td> t2    <span style="float:right">[7] </span></td> <td align="center"> 0</td></tr>
    <tr> <td> s0/fp <span style="float:right">[8] </span></td> <td align="center"> 0</td>
         <td> s1    <span style="float:right">[9] </span></td> <td align="center"> 0</td></tr>
    <tr> <td> a0    <span style="float:right">[10]</span></td> <td align="center"> 0</td>
         <td> a1    <span style="float:right">[11]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> a2    <span style="float:right">[12]</span></td> <td align="center"> 0</td>
         <td> a3    <span style="float:right">[13]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> a4    <span style="float:right">[14]</span></td> <td align="center"> 0</td>
         <td> a5    <span style="float:right">[15]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> a6    <span style="float:right">[16]</span></td> <td align="center"> 0</td>
         <td> a7    <span style="float:right">[17]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> s2    <span style="float:right">[18]</span></td> <td align="center"> 0</td>
         <td> s3    <span style="float:right">[19]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> s4    <span style="float:right">[20]</span></td> <td align="center"> 0</td>
         <td> s5    <span style="float:right">[21]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> s6    <span style="float:right">[22]</span></td> <td align="center"> 0</td>
         <td> s7    <span style="float:right">[23]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> s8    <span style="float:right">[24]</span></td> <td align="center"> 0</td>
         <td> s9    <span style="float:right">[25]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> s10   <span style="float:right">[26]</span></td> <td align="center"> 0</td>
         <td> s11   <span style="float:right">[27]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> t3    <span style="float:right">[28]</span></td> <td align="center"> 0</td>
         <td> t4    <span style="float:right">[29]</span></td> <td align="center"> 0</td></tr>
    <tr> <td> t5    <span style="float:right">[30]</span></td> <td align="center"> 0</td>
         <td> t6    <span style="float:right">[31]</span></td> <td align="center"> 0</td></tr>
</table>
`;

const memory_template = `
<div class="radio-toolbar">
    <input type="radio" id="hex" name="representation" value="hex" checked>
    <label for="hex" class="radio-btn-label">HEX</label>

    <input type="radio" id="dec" name="representation" value="dec">
    <label for="dec" class="radio-btn-label">DEC</label>

    <input type="radio" id="bin" name="representation" value="bin">
    <label for="bin" class="radio-btn-label">BINARY</label> 
</div>
<div id="stack" style="border:1px solid grey"></div>
`;

const console_template = `
<div id="console" class="console"></div>
`;

const breakdown_template = `
<table id="instruction" class="registers table table-condensed table-hover table-bordered table-striped">
    <tr> 
        <th> </th>
    </tr> 
    <tr> 
        <td> </td>
    </tr> 
    <tr> 
        <td> </td>
    </tr> 
</table>
`;

const source_template = `
<div class="btn-group" title="Load a C source file">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-upload fa-lg"></i>
    </button>
    <div class="dropdown-menu">
        <label id="upload_source" class="dropdown-item">
            Load a C file
            <input id="upload_source_input" type="file" style="display: none;">
        </label>
        <div class="dropdown-divider"></div>
        <h5 class="dropdown-header">Example C files:</h5>
        <a id="gcd_c"       class="dropdown-item" href="#">Greatest common divisor</a>
        <a id="fibonacci_c" class="dropdown-item" href="#">Fibonacci</a>
        <a id="binsearch_c" class="dropdown-item" href="#">Binary search</a>
    </div>
</div>

<button id="compile" class="btn" title="Compile C code to RISC-V assembly"><i class="fa fa-cog fa-lg"></i> </button>

<div id="source_editor" style="border:1px solid grey"></div>

<script>
    require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
    require(['vs/editor/editor.main'], function() {
        window.source_editor = monaco.editor.create(document.getElementById('source_editor'), {
            value: [
                'int fib(int n) {',
                '    if (n <= 1) {',
                '        return n;',
                '    } else {',
                '        return fib(n-1)+fib(n-2);',
                '    }',
                '}',
                '',
                'int return_function (int result) {',
                '    return result;',
                '}',
                '',
                'int main(){',
                '    int n = 9;',
                '    int result = return_function (fib(n));',
                '    return result;',
                '}'
            ].join('\\n'),
            language: 'c',
            automaticLayout: false,
            scrollbar: {
                useShadows: false,
                verticalHasArrows: false,
                horizontalHasArrows: false,
                vertical: 'auto',
                horizontal: 'auto'
            },
            minimap: {
                enabled: false
            }
        });
    });
</script>
`;

exports.source = source_template;
exports.breakdown = breakdown_template;
exports.registers = registers_template;
exports.memory = memory_template;
exports.assembly = assembly_template;
exports.console = console_template;
},{}],7:[function(require,module,exports){
//module.exports.frontend = "\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \nkernel:             \n\taddi	zero,zero,0 \n\taddi	ra,zero,0   \n\taddi	sp,zero,1536\n\taddi	gp,zero,0   \n\taddi	tp,zero,0   \n\taddi	t0,zero,0   \n\taddi	t1,zero,0   \n\taddi	t2,zero,0   \n\taddi	s0,zero,0   \n\taddi	a0,zero,0   \n\taddi	a1,zero,0   \n\taddi	a2,zero,0   \n\taddi	s3,zero,0   \n\taddi	a4,zero,0   \n\taddi	a5,zero,0   \n\taddi	a6,zero,0   \n\taddi	a7,zero,0   \n\taddi	s2,zero,0   \n\taddi	s3,zero,0   \n\taddi	s4,zero,0   \n\taddi	s5,zero,0   \n\taddi	s6,zero,0   \n\taddi	s7,zero,0   \n\taddi	s8,zero,0   \n\taddi	s9,zero,0   \n\taddi	s10,zero,0  \n\taddi	s11,zero,0  \n\taddi	t3,zero,0   \n\taddi	t4,zero,0   \n\taddi	t5,zero,0   \n\taddi	t6,zero,0   \n\tcall	main        \n\taddi	zero,zero,0 \n\tmv      s1,a0   \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n\tauipc	ra,0x0      \n\tjalr	ra,0(ra)    \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n";                        
module.exports.frontend = "\taddi	zero,zero,0 \nkernel:             \n\taddi	sp,zero,1536\n\tcall	main        \n\taddi	zero,zero,0 \n\tmv      s1,a0   \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n\tauipc	ra,0x0      \n\tjalr	ra,0(ra)    \n\taddi	zero,zero,0 \n\taddi	zero,zero,0 \n";                        

//module.exports.backend = "\taddi	zero,zero,0\n\taddi	zero,zero,0\n\taddi	zero,zero,0\n\taddi	zero,zero,0\n\tauipc	ra,0x0     \n\tjalr	ra,0(ra)   \n\taddi	zero,zero,0\n\taddi	zero,zero,0\n\taddi	zero,zero,0\n\taddi	zero,zero,0\n";
module.exports.backend = "\taddi	zero,zero,0\n\taddi	zero,zero,0\n\taddi	zero,zero,0\n\taddi	zero,zero,0\n\tauipc	ra,0x0     \n\tjalr	ra,0(ra)   \n\taddi	zero,zero,0\n\taddi	zero,zero,0\n\taddi	zero,zero,0\n\taddi	zero,zero,0\n";


},{}],8:[function(require,module,exports){
var gui    = require("./gui.js");
var kernel = require("./kernel.js");
var emul   = require("./emulator.js");
var parser = require("./parser.js");
const binaries = require("./asm_examples");

var useCompiler = false;

function setupAssembly(user_asm) {
    if  (!user_asm.endsWith('\n'))
        user_asm += '\n';
    var linked_asm = kernel.frontend + user_asm + kernel.backend;

    emul.setup_emulator(linked_asm);
    if (parser.get_error_count() > 0)
        var line_numbers = emul.instructions.map(el => String(el.text_line_number));
    else
        var line_numbers = emul.instructions.map(el => String(el.line_number));

    gui.createEditor(linked_asm, line_numbers);
    gui.update_debug_btns();
    gui.print_parser_result();
    gui.refresh_ip();
    gui.scrollToLine(0);
    gui.setup_stack();
    reset();
}

function loadC(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.readAsText(input.files[0]);

    reader.onload = function () {
        user_c = reader.result;
        window.source_editor.setValue(user_c);
    };
}

function loadAssembly(event) {
    gui.resetEditor();

    var input = event.target;
    var reader = new FileReader();
    reader.readAsText(input.files[0]);

    reader.onload = function () {
        user_asm = reader.result;
        setupAssembly(user_asm);
    };
}

function run(event) {
    emul.run()
    gui.refresh_breakdown(emul.instructions[emul.IP]);
    gui.refresh_ip();
    gui.refresh_regfile();
    gui.scrollToLine(emul.IP);
    gui.setup_stack();
}

function single_step(event) {
    emul.single_step();
    gui.refresh_breakdown(emul.instructions[emul.IP]);
    gui.refresh_ip();
    gui.refresh_regfile();
    gui.scrollToLine(emul.IP);
    gui.setup_stack();
}

function reset(event) {
    emul.reset();
    gui.refresh_breakdown(emul.instructions[emul.IP]);
    gui.refresh_regfile();
    gui.refresh_ip();
    gui.scrollToLine(1);
    gui.setup_stack();
}

function loadCExample(path) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                window.source_editor.setValue(allText);
            }
        }
    };
    rawFile.send(null);
}

/*function loadAssemblyExample(path) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                setupAssembly(allText);
            }
        }
    };
    rawFile.send(null);
}*/

function loadAssemblyExample(filename) {
    if (filename in binaries.files)
        setupAssembly(binaries.files[filename]);
    else
        console.log("Could not find ${filename} in assembly examples");
}

function con2hex(event) {
    gui.stack_base = 16;
    gui.setup_stack();    
}

function con2dec(event) {
    gui.stack_base = 10;
    gui.setup_stack();
}

function con2bin(event) {
    gui.stack_base = 2;
    gui.setup_stack();
}

function compile(event) {
    var code = window.source_editor.getValue();

    var request = new XMLHttpRequest();
    request.open("POST", "/compile", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request .onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            var json_response = JSON.parse(request.responseText);
            if ('error' in json_response) {
                gui.clear_console(); 
                gui.print_to_console("Compiler reported errors: \n" + json_response.error);
            }
            else if ('assembly' in json_response) {
                gui.clear_console(); 
                gui.print_to_console("Successfully compiled.\n");
                setupAssembly(json_response.assembly);    
            }
        }
    }

    request.send(JSON.stringify({
        source: code
    }));
}


window.addEventListener("load", function(event){

    function left_pane_callback() {
        document.getElementById("compile"    ).addEventListener('click',  compile);
        document.getElementById("upload_source" ).addEventListener('change', function(event) {
            loadC(event);
            // Wipe the value so that repeated loading of the same file works
            document.getElementById("upload_source_input").value = "";
        });
        document.getElementById("gcd_c"      ).addEventListener('click', function() {loadCExample("./sources/gcd.c")});
        document.getElementById("fibonacci_c").addEventListener('click', function() {loadCExample("./sources/fibonacci.c")});
        document.getElementById("binsearch_c").addEventListener('click', function() {loadCExample("./sources/binary_search.c")});
    }

    function right_pane_middle_callback() {
        document.getElementById("hex").addEventListener('click', con2hex);
        document.getElementById("dec").addEventListener('click', con2dec);
        document.getElementById("bin").addEventListener('click', con2bin);
        $("#stack").parent().css("overflow", "auto");
    }

    function middle_pane_callback() {
        document.getElementById("upload" ).addEventListener('change', function(event) {
            loadAssembly(event);
            // Wipe the value so that repeated loading of the same file works
            document.getElementById("upload_input").value = "";
        });
        document.getElementById("gcd_example"      ).addEventListener('click', function() {loadAssemblyExample("gcd")});
        document.getElementById("binsearch_example").addEventListener('click', function() {loadAssemblyExample("binary_search")});
        document.getElementById("syscall_example").addEventListener('click', function() {loadAssemblyExample("syscall")});
    

        // Commented out as keyboard shortcuts clash with the source editor

        //function doc_keyUp(e) {
            //if      (e.keyCode == 82) $("#run").click()    
            //else if (e.keyCode == 76) $("#upload").click() 
            //else if (e.keyCode == 83) $("#step").click() 
            //else if (e.keyCode == 88) $("#restart").click();
        //}
        //document.addEventListener('keydown', doc_keyUp, false);
    }

    gui.set_debug_btns_cb(run, single_step, reset);
    gui.setupGoldenLayout(left_pane_callback, middle_pane_callback, right_pane_middle_callback, useCompiler);
});


exports.single_step = single_step;

},{"./asm_examples":1,"./emulator.js":3,"./gui.js":5,"./kernel.js":7,"./parser.js":9}],9:[function(require,module,exports){
var nearley          = require("nearley");
var grammar          = require("./grammar.js");
var gui              = require("./gui.js");

var parser_error_count = 0;

function get_parser_error_count() {
    return parser_error_count;
}


/**
 * Parses the string file, returns a list of objects.
 * Each element of the list is an instruction object.
 */
function parse_file_for_instructions(file) {
    var lines = file.trim().split(/\r?\n/);

    var instructions = [];
    var line_number = 0;
    parser_error_count = 0;

    ///////////////////////////////////////////////////////////////////////////////////////
    // Go through each line of the file, and get Nearley to parse it.                    //
    // Calculate text line numbers, instruction line numbers, and instruction addresses. //
    // Return a list of instruction objects.                                             //
    ///////////////////////////////////////////////////////////////////////////////////////
    for (var i=0; i<lines.length; i++) {
        var instruction;
        try {
            const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
            parser.feed(lines[i].toLowerCase());
            instruction = parser.results[0];

            // Since the parser returns nothing if it cannot match a line, we should still
            // treat this as an error
            if (instruction == undefined) 
                instruction = {type: "ERROR", error: err};
        } 
        catch (err) {
            instruction = {type: "ERROR", error: err};
        }

        switch (instruction.type) {
            case "INSTRUCTION":
                instruction.line_number = line_number;
                instruction.address = line_number * 4; // Assumes 4 byte instructions
                line_number += 1;
                break;
            // TODO: issue - data labels have addresses 
            case "LABEL":
                instruction.address = line_number * 4; // Assumes 4 byte instructions
                instruction.line_number = "";
                break;
            case "ERROR":
                parser_error_count += 1;
                instruction.line_number = "";
                break;

            default: {
                instruction.line_number = "";
            }
        }

        instruction.original = lines[i];
        instruction.text_line_number = i;
        instructions.push(instruction); 
    }
    
    return instructions;
}


/** 
 * Parses instructions for text and data labels, and data emitting directives.
 * Returns: 
 *      1. A dictionary of text section labels with addresses and text line numbers
 *      2. A list of labels and data emitting directives.
 *        
 * Both these outputs should be passed to the linker function in the emulator.
 * We don't return a dictionary for the allocations, as we don't know yet where the 
 * allocations will be placed - that is the job of the linker. For now, we just pass
 * a list of mixed labels and data emitting directives.
 */
function parse_file_for_labels_and_memory(instructions) {
    var current_section = ".text";
    var text_labels = {};
    var allocations = [];

    for (var i=0; i<instructions.length; i++) {
        var ins = instructions[i]
        // Checks if the line is a section change, and if so updates current_section
        current_section = ins.subtype === "SECTION" ? ins.symbols[0] : current_section;

        switch (current_section) {
            case ".text": 
                if (ins.type === "LABEL") 
                    text_labels[ins.symbols[0]] = {text_line_number: ins.text_line_number,
                                                   address         : ins.address}
                break;
            case ".data": 
            case ".sdata": 
            case ".rodata": 
                // In case an instruction is a data emitting directive or label, add it to the list of allocations
                if (ins.subtype === "DATA_EMIT") 
                    allocations.push({type:  "ALLOCATION", 
                                      size:  ins.symbols[0],
                                      value: ins.symbols[1]});
                else if (ins.type === "LABEL") 
                    allocations.push({type:  "LABEL",
                                      value: ins.symbols[0]});
                break; 
            case ".bss": {
            }
        }
    }

    return [text_labels, allocations];
}


/** Print parser output to the GUI console */
function print_result(instr_list) {
    
    if (parser_error_count > 0) {
        gui.print_to_console("********   Parser Output    ***********\n");
        for (var i = 0; i < instr_list.length; i++) {
            if (instr_list[i].type === "ERROR") {
                gui.print_to_console(
                    "Error at line " + i + " in instruction \" "  + instr_list[i].original + "\"\n");
            }
        }
        gui.print_to_console("Parsing Failed. " + parser_error_count + " error(s)\n");
    } else {
        gui.print_to_console("********   Parser Output    ***********\n");
        gui.print_to_console("Parsing successful!\n");
    }
}


exports.parse_file_for_instructions      = parse_file_for_instructions;
exports.parse_file_for_labels_and_memory = parse_file_for_labels_and_memory;
exports.get_error_count                  = get_parser_error_count;
exports.print_result                     = print_result;

},{"./grammar.js":4,"./gui.js":5,"nearley":11}],10:[function(require,module,exports){
var gui  = require("./gui.js");
var emul = require("./emulator.js");
var main = require("./main.js");


var latest_syscall = undefined;


function handle_syscall(syscall_type) {
    var done = false;
    var error_message = undefined;
    
    // Print integer
    if (syscall_type == 1) {
        // Print a0 register contents 
        gui.print_to_console(emul.regfile[10] + "\n"); // 10 is register a0
        done = true;
        error_message = undefined;
    }
    // Print character
    else if (syscall_type == 2) {
        var value = emul.regfile[10]; // 10 is register a0
        if (value == 13) 
            var ascii = "<br>"
        else
            var ascii = String.fromCharCode(value);

        gui.print_to_console(ascii);   
        done = true;
        error_message = undefined;
    }
    // Print string
    else if (syscall_type == 3) {
        var address = emul.regfile[10]; // 10 is register a0
        var length  = emul.regfile[11]; // 11 is register a1
        var string = "";

        for (var i=0; i<length; i++) {
            var value = emul.memory[address+i].value;
            if (value == 13)
                string += "<br>";
            else
                string += String.fromCharCode(value)
        }

        gui.print_to_console(string);   
        done = true;
        error_message = undefined;
    }
    // Read integer
    else if (syscall_type == 4) {
        // If there exists no previously unfinished syscall, this is the first invocation
        if (latest_syscall == undefined || !latest_syscall['done']) {
            setup_input_field(4, writeback_integer);
            done = false;
            error_message = undefined;
        }
        // If the user previously ran the syscall, this 
        else {
            done = true;
            error_message = undefined;
        }
    }
    // Read char
    else if (syscall_type == 5) {
        // If there exists no previously unfinished syscall, this is the first invocation
        if (latest_syscall == undefined || !latest_syscall['done']) {
            setup_input_field(5, writeback_char);
            done = false;
            error_message = undefined;
        }
        // If the user previously ran the syscall, this 
        else {
            done = true;
            error_message = undefined;
        }
    }
    // Read string
    else if (syscall_type == 6) {
        // If there exists no previously unfinished syscall, this is the first invocation
        if (latest_syscall == undefined || !latest_syscall['done']) {
            setup_input_field(6, writeback_string);
            done = false;
            error_message = undefined;
        }
        // If the user previously ran the syscall, this 
        else {
            done = true;
            error_message = undefined;
        }
    }
    /*
     * SBRK: tries to allocate the number of bytes specified in register a0, up to a word size.
     * In case of success, returns the old end of the heap memory. Otherwise, returns -1.
     */
    else if (syscall_type == 7) {
        var words = emul.regfile[10] >> 2; // number of words by which to increase memory
        if (emul.memory_ranges.heap_end + words * 4 < emul.memory_ranges.stack_end) {
            emul.regfile[10] = emul.memory_ranges.heap_end;
            emul.memory_ranges.heap_end += words * 4; 
            gui.print_to_console("Successfully allocated " + words * 4 + " bytes.\n");
            done = true;
            error_message = undefined;
        } else {
            gui.print_to_console("Cannot allocate " + words * 4 + " bytes as heap would overwrite stack.\n");
            emul.regfile[10] = -1;
            done = true;
            error_message = "Cannot allocate " + words * 4 + " bytes as heap would overwrite stack.\n";
        }
    }
    // In case of an unknown syscall
    else  {
        done = false;
        error_message = "Unknown syscall";
    }

    return [done, error_message];
}


// Adds an input field to the console
function setup_input_field(type, callback) {
    var console_div = document.getElementById("console");
    // in case an input does not already exist on the console, this is the first call of the instruction, create an input field
    if ($("#console input").length == 0) {
        var input = document.createElement("input");
        input.type = "text";
        console_div.appendChild(input);
        input.focus();
    }
    // if the user has already ran this syscall, but has not yet completed the input, don't create a new element
    else {
        var input = $("#console input");
        input.focus();
    }

    latest_syscall = {'type': type, 'done': false};

    input.onkeypress = function (e) {
        // If the user pressed enter
        if (e.keyCode==13) {
            callback();

            // replace the input field with just text
            var user_value = $("#console input").val();
            $("#console input").remove();
            gui.print_to_console(user_value + "\n");

            // tell the emulator that the result is ready to use
            latest_syscall['done'] = true;
            // trigger the single step again so the IP moves to the next line
            main.single_step();
            // wipe the syscall
            latest_syscall = undefined; 
        }
    }
}

function writeback_integer() {
    var user_value = $("#console input").val();
    var register = 10; // a0

    // write the user input into a0
    emul.regfile[register] = parseInt(user_value);
}

function writeback_char() {
    var user_value = $("#console input").val();
    var register = 10; // a0

    // write the user input into a0
    emul.regfile[register] = user_value.charCodeAt(0);
}

function writeback_string() {
    var user_value = $("#console input").val();
    var address    = emul.regfile[10]; // a0
    var length     = emul.regfile[11]; // a1

    // write the user input into a0
    for (var i=0; i<length; i++){
        if (i >= user_value.length)
            var ascii = " ".charCodeAt(0);
        else
            var ascii = user_value.charCodeAt(i);

        emul.memory[address + i].value = ascii;
    }
}

exports.handle_syscall = handle_syscall;


},{"./emulator.js":3,"./gui.js":5,"./main.js":8}],11:[function(require,module,exports){
(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.nearley = factory();
    }
}(this, function() {

    function Rule(name, symbols, postprocess) {
        this.id = ++Rule.highestId;
        this.name = name;
        this.symbols = symbols;        // a list of literal | regex class | nonterminal
        this.postprocess = postprocess;
        return this;
    }
    Rule.highestId = 0;

    Rule.prototype.toString = function(withCursorAt) {
        function stringifySymbolSequence (e) {
            return e.literal ? JSON.stringify(e.literal) :
                   e.type ? '%' + e.type : e.toString();
        }
        var symbolSequence = (typeof withCursorAt === "undefined")
                             ? this.symbols.map(stringifySymbolSequence).join(' ')
                             : (   this.symbols.slice(0, withCursorAt).map(stringifySymbolSequence).join(' ')
                                 + " ● "
                                 + this.symbols.slice(withCursorAt).map(stringifySymbolSequence).join(' ')     );
        return this.name + " → " + symbolSequence;
    }


    // a State is a rule at a position from a given starting point in the input stream (reference)
    function State(rule, dot, reference, wantedBy) {
        this.rule = rule;
        this.dot = dot;
        this.reference = reference;
        this.data = [];
        this.wantedBy = wantedBy;
        this.isComplete = this.dot === rule.symbols.length;
    }

    State.prototype.toString = function() {
        return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
    };

    State.prototype.nextState = function(child) {
        var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
        state.left = this;
        state.right = child;
        if (state.isComplete) {
            state.data = state.build();
        }
        return state;
    };

    State.prototype.build = function() {
        var children = [];
        var node = this;
        do {
            children.push(node.right.data);
            node = node.left;
        } while (node.left);
        children.reverse();
        return children;
    };

    State.prototype.finish = function() {
        if (this.rule.postprocess) {
            this.data = this.rule.postprocess(this.data, this.reference, Parser.fail);
        }
    };


    function Column(grammar, index) {
        this.grammar = grammar;
        this.index = index;
        this.states = [];
        this.wants = {}; // states indexed by the non-terminal they expect
        this.scannable = []; // list of states that expect a token
        this.completed = {}; // states that are nullable
    }


    Column.prototype.process = function(nextColumn) {
        var states = this.states;
        var wants = this.wants;
        var completed = this.completed;

        for (var w = 0; w < states.length; w++) { // nb. we push() during iteration
            var state = states[w];

            if (state.isComplete) {
                state.finish();
                if (state.data !== Parser.fail) {
                    // complete
                    var wantedBy = state.wantedBy;
                    for (var i = wantedBy.length; i--; ) { // this line is hot
                        var left = wantedBy[i];
                        this.complete(left, state);
                    }

                    // special-case nullables
                    if (state.reference === this.index) {
                        // make sure future predictors of this rule get completed.
                        var exp = state.rule.name;
                        (this.completed[exp] = this.completed[exp] || []).push(state);
                    }
                }

            } else {
                // queue scannable states
                var exp = state.rule.symbols[state.dot];
                if (typeof exp !== 'string') {
                    this.scannable.push(state);
                    continue;
                }

                // predict
                if (wants[exp]) {
                    wants[exp].push(state);

                    if (completed.hasOwnProperty(exp)) {
                        var nulls = completed[exp];
                        for (var i = 0; i < nulls.length; i++) {
                            var right = nulls[i];
                            this.complete(state, right);
                        }
                    }
                } else {
                    wants[exp] = [state];
                    this.predict(exp);
                }
            }
        }
    }

    Column.prototype.predict = function(exp) {
        var rules = this.grammar.byName[exp] || [];

        for (var i = 0; i < rules.length; i++) {
            var r = rules[i];
            var wantedBy = this.wants[exp];
            var s = new State(r, 0, this.index, wantedBy);
            this.states.push(s);
        }
    }

    Column.prototype.complete = function(left, right) {
        var copy = left.nextState(right);
        this.states.push(copy);
    }


    function Grammar(rules, start) {
        this.rules = rules;
        this.start = start || this.rules[0].name;
        var byName = this.byName = {};
        this.rules.forEach(function(rule) {
            if (!byName.hasOwnProperty(rule.name)) {
                byName[rule.name] = [];
            }
            byName[rule.name].push(rule);
        });
    }

    // So we can allow passing (rules, start) directly to Parser for backwards compatibility
    Grammar.fromCompiled = function(rules, start) {
        var lexer = rules.Lexer;
        if (rules.ParserStart) {
          start = rules.ParserStart;
          rules = rules.ParserRules;
        }
        var rules = rules.map(function (r) { return (new Rule(r.name, r.symbols, r.postprocess)); });
        var g = new Grammar(rules, start);
        g.lexer = lexer; // nb. storing lexer on Grammar is iffy, but unavoidable
        return g;
    }


    function StreamLexer() {
      this.reset("");
    }

    StreamLexer.prototype.reset = function(data, state) {
        this.buffer = data;
        this.index = 0;
        this.line = state ? state.line : 1;
        this.lastLineBreak = state ? -state.col : 0;
    }

    StreamLexer.prototype.next = function() {
        if (this.index < this.buffer.length) {
            var ch = this.buffer[this.index++];
            if (ch === '\n') {
              this.line += 1;
              this.lastLineBreak = this.index;
            }
            return {value: ch};
        }
    }

    StreamLexer.prototype.save = function() {
      return {
        line: this.line,
        col: this.index - this.lastLineBreak,
      }
    }

    StreamLexer.prototype.formatError = function(token, message) {
        // nb. this gets called after consuming the offending token,
        // so the culprit is index-1
        var buffer = this.buffer;
        if (typeof buffer === 'string') {
            var nextLineBreak = buffer.indexOf('\n', this.index);
            if (nextLineBreak === -1) nextLineBreak = buffer.length;
            var line = buffer.substring(this.lastLineBreak, nextLineBreak)
            var col = this.index - this.lastLineBreak;
            message += " at line " + this.line + " col " + col + ":\n\n";
            message += "  " + line + "\n"
            message += "  " + Array(col).join(" ") + "^"
            return message;
        } else {
            return message + " at index " + (this.index - 1);
        }
    }


    function Parser(rules, start, options) {
        if (rules instanceof Grammar) {
            var grammar = rules;
            var options = start;
        } else {
            var grammar = Grammar.fromCompiled(rules, start);
        }
        this.grammar = grammar;

        // Read options
        this.options = {
            keepHistory: false,
            lexer: grammar.lexer || new StreamLexer,
        };
        for (var key in (options || {})) {
            this.options[key] = options[key];
        }

        // Setup lexer
        this.lexer = this.options.lexer;
        this.lexerState = undefined;

        // Setup a table
        var column = new Column(grammar, 0);
        var table = this.table = [column];

        // I could be expecting anything.
        column.wants[grammar.start] = [];
        column.predict(grammar.start);
        // TODO what if start rule is nullable?
        column.process();
        this.current = 0; // token index
    }

    // create a reserved token for indicating a parse fail
    Parser.fail = {};

    Parser.prototype.feed = function(chunk) {
        var lexer = this.lexer;
        lexer.reset(chunk, this.lexerState);

        var token;
        while (token = lexer.next()) {
            // We add new states to table[current+1]
            var column = this.table[this.current];

            // GC unused states
            if (!this.options.keepHistory) {
                delete this.table[this.current - 1];
            }

            var n = this.current + 1;
            var nextColumn = new Column(this.grammar, n);
            this.table.push(nextColumn);

            // Advance all tokens that expect the symbol
            var literal = token.text !== undefined ? token.text : token.value;
            var value = lexer.constructor === StreamLexer ? token.value : token;
            var scannable = column.scannable;
            for (var w = scannable.length; w--; ) {
                var state = scannable[w];
                var expect = state.rule.symbols[state.dot];
                // Try to consume the token
                // either regex or literal
                if (expect.test ? expect.test(value) :
                    expect.type ? expect.type === token.type
                                : expect.literal === literal) {
                    // Add it
                    var next = state.nextState({data: value, token: token, isToken: true, reference: n - 1});
                    nextColumn.states.push(next);
                }
            }

            // Next, for each of the rules, we either
            // (a) complete it, and try to see if the reference row expected that
            //     rule
            // (b) predict the next nonterminal it expects by adding that
            //     nonterminal's start state
            // To prevent duplication, we also keep track of rules we have already
            // added

            nextColumn.process();

            // If needed, throw an error:
            if (nextColumn.states.length === 0) {
                // No states at all! This is not good.
                var err = new Error(this.reportError(token));
                err.offset = this.current;
                err.token = token;
                throw err;
            }

            // maybe save lexer state
            if (this.options.keepHistory) {
              column.lexerState = lexer.save()
            }

            this.current++;
        }
        if (column) {
          this.lexerState = lexer.save()
        }

        // Incrementally keep track of results
        this.results = this.finish();

        // Allow chaining, for whatever it's worth
        return this;
    };

    Parser.prototype.reportError = function(token) {
        var lines = [];
        var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== undefined ? token.value : token);
        lines.push(this.lexer.formatError(token, "Syntax error"));
        lines.push('Unexpected ' + tokenDisplay + '. Instead, I was expecting to see one of the following:\n');
        var lastColumnIndex = this.table.length - 2;
        var lastColumn = this.table[lastColumnIndex];
        var expectantStates = lastColumn.states
            .filter(function(state) {
                const nextSymbol = state.rule.symbols[state.dot];
                return nextSymbol && typeof nextSymbol !== "string";
            });
        
        // Display a "state stack" for each expectant state
        // - which shows you how this state came to be, step by step. 
        // If there is more than one derivation, we only display the first one.
        var stateStacks = expectantStates
            .map(function(state) {
                const stacks = this.buildStateStacks(state, []);
                return stacks[0];
            }, this);
        // Display each state that is expecting a terminal symbol next.
        stateStacks.forEach(function(stateStack) {
            var state = stateStack[0];
            var nextSymbol = state.rule.symbols[state.dot];
            var symbolDisplay = this.getSymbolDisplay(nextSymbol);
            lines.push('A ' + symbolDisplay + ' based on:');
            this.displayStateStack(stateStack, lines);
        }, this);
            
        lines.push("");
        return lines.join("\n");
    };

    Parser.prototype.displayStateStack = function(stateStack, lines) {
        var lastDisplay;
        var sameDisplayCount = 0;
        for (var j = 0; j < stateStack.length; j++) {
            var state = stateStack[j];
            var display = state.rule.toString(state.dot);
            if (display === lastDisplay) {
                sameDisplayCount++;
            } else {
                if (sameDisplayCount > 0) {
                    lines.push('    ⬆ ︎' + sameDisplayCount + ' more lines identical to this');
                }
                sameDisplayCount = 0;
                lines.push('    ' + display);
            }
            lastDisplay = display;
        }
    };

    Parser.prototype.getSymbolDisplay = function(symbol) {
        var type = typeof symbol;
        if (type === "string") {
            return symbol;
        } else if (type === "object" && symbol.literal) {
            return JSON.stringify(symbol.literal);
        } else if (type === "object" && symbol instanceof RegExp) {
            return 'character matching ' + symbol;
        } else if (type === "object" && symbol.type) {
            return symbol.type + ' token';
        } else {
            throw new Error('Unknown symbol type: ' + symbol);
        }
    };

    /*
    Builds a number of "state stacks". You can think of a state stack as the call stack
    of the recursive-descent parser which the Nearley parse algorithm simulates.
    A state stack is represented as an array of state objects. Within a 
    state stack, the first item of the array will be the starting
    state, with each successive item in the array going further back into history.
    
    This function needs to be given a starting state and an empty array representing
    the visited states, and it returns an array of state stacks. 
    
    */
    Parser.prototype.buildStateStacks = function(state, visited) {
        if (visited.indexOf(state) !== -1) {
            // Found cycle, return empty array (meaning no stacks)
            // to eliminate this path from the results, because
            // we don't know how to display it meaningfully
            return [];
        }
        if (state.wantedBy.length === 0) {
            return [[state]];
        }
        var that = this;

        return state.wantedBy.reduce(function(stacks, prevState) {
            return stacks.concat(that.buildStateStacks(
                prevState,
                [state].concat(visited))
                .map(function(stack) {
                    return [state].concat(stack);
                }));
        }, []);
    };

    Parser.prototype.save = function() {
        var column = this.table[this.current];
        column.lexerState = this.lexerState;
        return column;
    };

    Parser.prototype.restore = function(column) {
        var index = column.index;
        this.current = index;
        this.table[index] = column;
        this.table.splice(index + 1);
        this.lexerState = column.lexerState;

        // Incrementally keep track of results
        this.results = this.finish();
    };

    // nb. deprecated: use save/restore instead!
    Parser.prototype.rewind = function(index) {
        if (!this.options.keepHistory) {
            throw new Error('set option `keepHistory` to enable rewinding')
        }
        // nb. recall column (table) indicies fall between token indicies.
        //        col 0   --   token 0   --   col 1
        this.restore(this.table[index]);
    };

    Parser.prototype.finish = function() {
        // Return the possible parsings
        var considerations = [];
        var start = this.grammar.start;
        var column = this.table[this.table.length - 1]
        column.states.forEach(function (t) {
            if (t.rule.name === start
                    && t.dot === t.rule.symbols.length
                    && t.reference === 0
                    && t.data !== Parser.fail) {
                considerations.push(t);
            }
        });
        return considerations.map(function(c) {return c.data; });
    };

    return {
        Parser: Parser,
        Grammar: Grammar,
        Rule: Rule,
    };

}));

},{}]},{},[1,2,3,4,5,6,7,8,9,10]);
