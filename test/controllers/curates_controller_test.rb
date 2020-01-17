require 'test_helper'

class CuratesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @curate = curates(:one)
  end

  test "should get index" do
    get curates_url, as: :json
    assert_response :success
  end

  test "should create curate" do
    assert_difference('Curate.count') do
      post curates_url, params: { curate: { answer: @curate.answer, email: @curate.email, name: @curate.name, phone: @curate.phone } }, as: :json
    end

    assert_response 201
  end

  test "should show curate" do
    get curate_url(@curate), as: :json
    assert_response :success
  end

  test "should update curate" do
    patch curate_url(@curate), params: { curate: { answer: @curate.answer, email: @curate.email, name: @curate.name, phone: @curate.phone } }, as: :json
    assert_response 200
  end

  test "should destroy curate" do
    assert_difference('Curate.count', -1) do
      delete curate_url(@curate), as: :json
    end

    assert_response 204
  end
end
