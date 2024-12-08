import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface QuestionInterface {
  questionNo: number;
  questionName: string;
}

export interface AnswerInterface {
  questionNo: number;
  answerNo: number;
  answerResult: string;
}

export interface NumberListInterface {}

export interface ResponseData {
  questions: QuestionInterface[];
  answers: AnswerInterface[];
  numberList: string[];
}

export const baydinApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `/`,
  }),
  reducerPath: "baydinApi",
  endpoints: (build) => ({
    getAllData: build.query<ResponseData, undefined>({
      query: () => `MinTheinKha.LatHtaukBayDin.json`,
    }),
  }),
});

export const { useGetAllDataQuery } = baydinApiSlice;
