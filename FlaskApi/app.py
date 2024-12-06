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

@app.route('/predict', methods = ['POST'])
def predict():
    data = request.json  # Receive JSON data from Node.js
    print("Received data:", data)
    received_workouts = data['workouts']
    weeks = int(data['weeksFollowing'])

    # Step 1: Start with basic attributes
    input_list = [
        data.get('age', 0),
        data.get('height', 0),
        1 if data.get('goal') == 'Muscle Gain' else 0,
        1 if 'Heart Issues' in data.get('healthIssues', []) else 0,
        1 if 'Respiratory Issues' in data.get('healthIssues', []) else 0,
        1 if 'Diabetes' in data.get('healthIssues', []) else 0,
        1 if 'High Blood Pressure' in data.get('healthIssues', []) else 0,
        1 if 'Chronic Back Pain' in data.get('healthIssues', []) else 0
    ]

    # Append the weight 4 times here
    weight = data.get('weight', 0)
    input_list.extend([weight] * 4)


    # Generate one week of data
    one_week_data = [int(received_workouts.get(ex, 0)) for ex in exercise_names]

    # Create data for 4 weeks, padding with zeros if weeksFollowing < 4
    repeated_data = [0] * len(one_week_data) * (4 - weeks) + one_week_data * weeks
    input_list.extend(repeated_data)
    print(input_list)
    return data

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
    app.run(debug=True, port=5001)
