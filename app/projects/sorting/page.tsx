"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
// import { isAnyArrayBuffer } from "util/types";

export default function Sorting() {
  const [array, setArray] = useState<number[]>([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  const [arrayLength, setArrayLength] = useState<number>(10);
  const [algorithm, setAlgorithm] = useState<string>("bubbleSort");
  const [sorting, setSorting] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(25);

  function randomArrGenerator(length: number) {
    if (length < 2) {
      alert("Array length must be at least 2");
      return;
    }
    if (length > 100) {
      alert("Array length must be at least 100");
      return;
    }
    const arr = Array.from({ length }, () => Math.floor(Math.random() * 100));
    setArray(arr);
  }

  // algorithms
  useEffect(() => {
    async function bubbleSort(arr: number[]) {
      let sorted = false;
      while (!sorted) {
        let count = 0;
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
            let hold = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = hold;
            await new Promise((resolve) => setTimeout(resolve, speed));
            setArray([...arr]);
          } else {
            count++;
          }
        }
        if (count === arr.length - 1) sorted = true;
      }
      return arr;
    }

    async function SelectionSort(arr: number[]) {
      for (let i = 0; i < arr.length - 1; i++) {
        let smallest = Number.POSITIVE_INFINITY;
        let index = -1;
        for (let j = i; j < arr.length; j++) {
          if (arr[j] < smallest) {
            index = j;
            smallest = arr[j];
          }
        }
        if (smallest < arr[i]) {
          let temp = arr[i];
          arr[i] = smallest;
          arr[index] = temp;
        }
        await new Promise((resolve) => setTimeout(resolve, speed));
        setArray([...arr]);
      }
    }

    async function insertionSort(arr: number[]) {
      for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];

        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = key;
        await new Promise((resolve) => setTimeout(resolve, speed));
        setArray([...arr]);
      }
    }

    // Mergesort is implmented without recursion for visualiozation purposes
    async function mergeSort(arr: number[]) {
      const len = arr.length;
      const temp: number[] = new Array(len);

      for (let blockSize = 1; blockSize < len; blockSize *= 2) {
        for (let start = 0; start < len; start += 2 * blockSize) {
          const low = start;
          const mid = Math.min(start + blockSize, len);
          const high = Math.min(start + 2 * blockSize, len);

          // Merge the two halves
          let leftIdx = low;
          let rightIdx = mid;

          for (let i = low; i < high; i++) {
            if (
              leftIdx < mid &&
              (rightIdx >= high || arr[leftIdx] <= arr[rightIdx])
            ) {
              temp[i] = arr[leftIdx];
              leftIdx++;
            } else {
              temp[i] = arr[rightIdx];
              rightIdx++;
            }
          }

          // Copy merged elements back to the original array
          for (let i = low; i < high; i++) {
            arr[i] = temp[i];
          }
          await new Promise((resolve) => setTimeout(resolve, speed));
          setArray([...arr]);
        }
      }
    }

    // quicksort is implmented without recursion for visualiozation purposes
    async function quickSort(arr: number[]) {
      const stack: number[][] = []; // Create a stack to simulate recursion
      stack.push([0, arr.length - 1]); // Push the initial range onto the stack

      while (stack.length > 0) {
        const [low, high] = stack.pop()!; // Pop the range from the stack

        if (low < high) {
          const pivotIndex = partition(arr, low, high); // Get the pivot index

          // Push the left and right subranges onto the stack
          stack.push([low, pivotIndex - 1]);
          stack.push([pivotIndex + 1, high]);
        }
        await new Promise((resolve) => setTimeout(resolve, speed));
        setArray([...arr]);
      }
    }
    function partition(arr: number[], low: number, high: number): number {
      const pivot = arr[high]; // Choose the pivot element (you can choose a different pivot strategy if needed)
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
          i++;
          // Swap arr[i] and arr[j]
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }

      // Swap arr[i+1] and arr[high] (put the pivot in its correct place)
      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;

      return i + 1; // Return the pivot index
    }

    async function sort() {
      if (algorithm === "bubbleSort") bubbleSort(array);
      if (algorithm === "selectionSort") SelectionSort(array);
      if (algorithm === "insertionSort") insertionSort(array);
      if (algorithm === "mergeSort") mergeSort(array);
      if (algorithm === "quickSort") quickSort(array);
      setSorting(false);
    }

    if (sorting) sort();
  }, [array, algorithm, sorting, speed]);

  return (
    <>
      <div>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SSHP15V2W1"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SSHP15V2W1');`}
        </Script>
      </div>
      <div
        id="main-container"
        className=" flex flex-col items-center max-w-full"
      >
        <div
          id="viewing-container"
          className="max-h-96 flex justify-center items-end py-2 pt-6"
        >
          {array.map((value, index) => (
            <div
              key={index}
              className="w-2 bg-black m-0.5"
              style={{ height: `${value * 3}px` }}
            ></div>
          ))}
        </div>
        <div>
          <p id="array" className="text-xs">
            [{array.join(",")}]
          </p>
        </div>
        <div className="flex flex-wrap items-center text-center justify-evenly w-3/4 lg:w-1/2 h-1/2 lg:my-2 border rounded-xl p-2">
          <div className="max-w-full">
            <p>Input the length of the array</p>
            <p>Must be between 1-100</p>
            <input
              type="number"
              className="border border-black max-w-full"
              value={arrayLength}
              onChange={(e) => {
                setArrayLength(parseInt(e.target.value));
              }}
            ></input>
          </div>
          <div className="flex flex-col items-center text-center my-2 lg:my-0 ">
            <label htmlFor="algorithms">Select a sorting algorithm</label>
            <select
              id="algorithms"
              className="border border-black"
              onChange={(e) => setAlgorithm(e.target.value)}
              name="algorithms"
            >
              <option value="bubbleSort">Bubble sort</option>
              <option value="selectionSort">Selection Sort</option>
              <option value="insertionSort">Insertion Sort</option>
              <option value="mergeSort">Merge Sort</option>
              <option value="quickSort">Quick Sort</option>
              {/* <option value="heapSort">Heap Sort</option> */}
            </select>
            <p
              className={`${
                algorithm === "mergeSort" || algorithm === "quickSort"
                  ? ""
                  : "hidden"
              } text-red-400 text-sm`}
            >
              *This algorithm was implmented in an iterative way for
              visualization purposes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <label htmlFor="algorithms">Select speed</label>
            <select
              id="speedSelector"
              className="border border-black"
              onChange={(e) => setSpeed(parseInt(e.target.value))}
              name="speedSelector"
            >
              <option value={25}>fast</option>
              <option value={75}>normal</option>
              <option value={150}>slow</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col h-32 justify-around">
          <button
            onClick={() => randomArrGenerator(arrayLength)}
            className="border border-lime-700 p-2 rounded-xl"
          >
            Randomize Array
          </button>
          <button
            className="border border-lime-700 p-2 rounded-xl"
            onClick={() => setSorting(true)}
            disabled={sorting}
          >
            Sort
          </button>
        </div>
      </div>
    </>
  );
}
