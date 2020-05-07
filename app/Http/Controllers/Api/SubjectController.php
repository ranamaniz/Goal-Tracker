<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Subject;

class SubjectController extends Controller
{
    public function store(Request $request){
    	$subject = new Subject();
    	// dd($subject);
    	// dd($request);

    	$subject->subject_name = $request->subject_name;
    	$subject->save();
    }

    public function show(Subject $subject){
    	// $subjects= Subject::all();
    	// return $subjects;

    	// $subjects->load('subjects');
    	// dd($subject::all());
    	return $subject::all();

    	
    }
}
