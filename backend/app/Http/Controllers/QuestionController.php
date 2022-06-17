<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use App\Models\Survey;

class QuestionController extends Controller
{
    public function create(Request $request) {
        $survey = new Survey;
        $survey->name = $request->name;
        $survey->description = $request->description;
        $survey->save();
        $survey_id = $survey->id;

        $question = new Question;
        $question->survey_id = $survey_id;
        $question->type = $request->type;
        $question->option = $request->option;
        $question->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
