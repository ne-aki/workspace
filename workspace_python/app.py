from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
  return 'Hello, World!'

# 버튼1 클릭 시 호출 api
@app.route('/t1', methods=['GET'])
def test1():
  return {'name' : 'python'}
#파라미터 데이터 가져오기
@app.route('/t2', methods=['GET'])
@app.route('/t2/<int:num>', methods=['GET'])
def test2(num=None):
  if num:
    print(f'전달된 데이터 = {num}')
  return {}
@app.route('/t3', methods=['POST'])
def test3():
  data = request.get_json()
  print(data.get('stuName'))
  print(data.get('stuAge'))
  return {}
@app.route('/t4', methods=['GET'])
def test4():
  stuName = request.args.get('stuName')
  stuAge = request.args.get('stuAge')
  print(stuName, stuAge)
  return {}

if __name__ == '__main__':
  #host='0.0.0.0' -> 모든 ip에서 접근 허용
  app.run(debug=True, host='0.0.0.0', port=5000)