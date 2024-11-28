from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# List of exercise columns
exercise_names = [
    'bench_press_sets', 'bench_press_reps', 'pushups_sets', 'pushups_reps', 'chest_fly_sets', 'chest_fly_reps',
    'squats_sets', 'squats_reps', 'lunges_sets', 'lunges_reps', 'leg_press_sets', 'leg_press_reps',
    'bicep_curls_sets', 'bicep_curls_reps', 'hammer_curls_sets', 'hammer_curls_reps', 'concentration_curls_sets',
    'concentration_curls_reps', 'overhead_press_sets', 'overhead_press_reps', 'lateral_raise_sets',
    'lateral_raise_reps', 'front_raise_sets', 'front_raise_reps', 'deadlifts_sets', 'deadlifts_reps',
    'pullups_sets', 'pullups_reps', 'rows_sets', 'rows_reps', 'tricep_dips_sets', 'tricep_dips_reps',
    'skull_crushers_sets', 'skull_crushers_reps', 'tricep_pushdowns_sets', 'tricep_pushdowns_reps'
]

@app.route('/api/getRecommendation', methods=['POST'])
def get_recommendation():
    print("hdfbbdbf")
    data = request.json
    print(data)
    
    # Default structure with 0s
    base_workout_structure = {col: 0 for col in exercise_names}
    
    # Mapping workouts from the frontend data
    for workout in data['workouts']:
        name = workout['name']  # E.g., "hammer_curls"
        sets_col = f"{name}_sets"  # E.g., "hammer_curls_sets"
        reps_col = f"{name}_reps"  # E.g., "hammer_curls_reps"
        if sets_col in base_workout_structure and reps_col in base_workout_structure:
            base_workout_structure[sets_col] = int(workout['sets'])
            base_workout_structure[reps_col] = int(workout['reps'])
    
    # Handling weeksFollowing repetition
    weeks = int(data['weeksFollowing'])
    result = [base_workout_structure.copy() for _ in range(weeks)]
    
    # Return the result
    print("RESULT: ",result)
    return jsonify(result[0])

if __name__ == '__main__':
    app.run(debug=True)
